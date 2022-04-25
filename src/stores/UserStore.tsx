import { makeObservable, observable, computed, action } from 'mobx';
import config from '../utils/config';
import localStore from '../utils/localStore';
import { aesEncryptData, aesDecryptData } from '../utils/aesEncrypt';
import { LCDClient } from '@terra-money/terra.js';
import jwt_decode from 'jwt-decode';
import * as Sentry from '@sentry/react';

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginWithTwitterProps {
  oauthToken: string;
  oauthVerifier: string;
}

export interface IStoreResponse {
  success: boolean;
  message?: string | any;
  data?: any
}

export interface IUser {
  address?: string;
  balances?: {
    ust: number;
  };
}

export interface IBalance {
  amount: string;
  denom: string;
}

export interface IAuth {
  userId: string;
  email: string;
  token?: any;
  apiKey: string;
  exp: number;
  email_verified?: boolean;
  auth_time?: number;
}

export class UserStore {
  @observable user: IUser | null = null;
  @observable auth: IAuth | null = null;
  @observable locale: string = '';
  terra: LCDClient = new LCDClient({
    URL: config.lcdClient.url,
    chainID: config.lcdClient.chainId,
  });
  @observable terraStationConnected: boolean = false;

  constructor() {
    makeObservable(this);
    this.init()
      .then(() => true)
      .catch((err) => console.error('UserStore init error: ', err));
  }

  init = async () => {
    await this.getUser();
    await this.getAuth();
  }

  /**
   * Get the user from memory or local storage
   */
  async getUser(): Promise<IUser | null> {
    try {
      if (this.user !== null) {
        return this.user;
      }

      if (this.userExists) {
        const user = aesDecryptData(localStore.get(config.localStoreKey.user), config.kadoClient.aes);
        this.user = user;
        return this.user;
      }
    } catch (err) {
      console.error(err);
      this.user = null;
      return null;
    }

    return null;
  }

  /**
   * Check if a user exists in Local Storage
   */
  @computed
  get userExists(): boolean {
    try {
      if (localStore.isAvailable()) {
        const user = localStore.get(config.localStoreKey.user);
        return (user && user !== null) ? true : false;
      }
    } catch (err) {
      return false;
    }

    return false;
  }

  /**
   * Set the user wallet after connecting
   * @param address Terra Wallet address
   */
  @action
  setUserWalletAddress(address: string) {
    if (!this.terraStationConnected) {
      localStore.set(config.localStoreKey.user, aesEncryptData({ address }, config.kadoClient.aes));
      this.user = { address };
      this.getTerraBalances(address);
      this.terraStationConnected = true;
    }
  }

  @action
  resetUser() {
    localStore.deleteItem(config.localStoreKey.user);
    this.user = null;
    this.terraStationConnected = false;
  }

  @action resetAuth() {
    localStore.deleteItem(config.localStoreKey.auth);
    localStore.deleteItem(config.localStoreKey.jwt);
    this.auth = null;
  }

  /**
   * Get the wallet balances
   * @param address Terra Wallet address
   */
  @action
  async getTerraBalances(address: string) {
    try {
      let [balance]: any = await this.terra.bank.balance(address);
      balance = balance.toData();
      let ustBalance = balance.find(x => x.denom === 'uusd').amount || 0;

      if (ustBalance && ustBalance > 0) {
        ustBalance = parseInt(ustBalance) / 1000000;

        this.user = {
          ...this.user,
          balances: {
            ust: ustBalance
          }
        }
      }

      return this.user;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  @action
  public setLocale(locale: string) {
    localStore.set(config.localStoreKey.locale, locale);
    this.locale = locale;
  }

  @action
  public getLocale() {
    try {
      if (localStore.isAvailable()) {
        const locale = localStore.get(config.localStoreKey.locale);
        return (locale && locale !== null) ? locale : 'en'; // Fallback to 'en'
      }
    } catch (err) {
      console.error(err);
      return 'en';
    }
  }
  
  @action
  public getIsLoggedIn() {
    if (localStore.isAvailable() && localStore.get(config.localStoreKey.logInStatus)) {
      return localStore.get(config.localStoreKey.logInStatus);
    }
    this.resetAuth();
    this.resetUser();
    return false;
  }
  
  @action
  public setIsLoggedIn(isLoggedIn: boolean) {
    localStore.set(config.localStoreKey.logInStatus, isLoggedIn);
  }
  
  @action
  public getJwt() {
    if (localStore.isAvailable() && localStore.get(config.localStoreKey.jwt)) {
      return aesDecryptData(localStore.get(config.localStoreKey.jwt), config.kadoClient.aes);
    }
    return '';
  }
  
  @action
  public setAuth(authData: IAuth) {
    localStore.set(config.localStoreKey.jwt, aesEncryptData(authData.token, config.kadoClient.aes));
    if (authData && authData.token) {
      const auth = JSON.parse(jwt_decode(authData.token));
      delete authData.token;
      localStore.set(config.localStoreKey.auth, aesEncryptData(auth, config.kadoClient.aes));
      Sentry.setUser({
        id: auth.userId,
        email: auth.email,
        email_verified: auth.email_verified
      })
      this.auth = auth;
    }
  }

  @action
  public getAuth() {
    try {
      if (this.auth !== null) {
        return this.auth;
      }

      if (localStore.isAvailable()) {
        const auth = aesDecryptData(localStore.get(config.localStoreKey.auth), config.kadoClient.aes);
        if (auth) {
          this.auth = auth;
          return this.auth;
        }
      }
    } catch (err) {
      this.auth = null;
      return null;
    }

    return null;
  }
}

// decorate(UserStore, {
//   user: observable,
//   locale: observable,
//   auth: observable,
//   userExists: computed,
// });
