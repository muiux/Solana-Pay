import { makeObservable, observable, computed, action } from 'mobx';
import config from '../utils/config';
import { localStore } from '../utils';
import { getUserSpending24Hours, getStakingStatus, getCart, addToCart, removeCartItem, updateCartItemQuantity, getOrderDetails, getCartLength, getPrizeList, getPrizeHistory, getNewPrize, getCurrentPrize, bumpWaitlist, issuePrize } from '../utils/apiServices';
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
  retailer?: string; // zinc
  domain?: string; // rainforest
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
  @observable orders: any[] = [];
  @observable cart: any[] = [];
  @observable cartSize: number = 0;
  @observable retailer: string = '';
  @observable domain: string = '';
  @observable region: string = '';

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
   * Log the user in and start any required checks.
   * @param data login auth data
   * @returns success, message, data
   */
  async login(data: ILoginProps): Promise<IStoreResponse> {
    try {
      const login = await fetch(`${config.kadoClient.url}/v1/user/auth`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const response = await login.json();

      if (response.success) {
        this.setAuth(response.data);
        this.setIsLoggedIn(true);
        this.setCartLength();
        return {
          success: true,
          data: response.data
        };
      } else {
        this.setIsLoggedIn(false);
        return {
          success: false,
          message: response.message
        };
      }
    } catch (err) {
      this.setIsLoggedIn(false);
      console.error('login err: ', err);
      return {
        success: false,
        message: err
      };
    }
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
      this.getUserBalances(address);
      this.terraStationConnected = true;
    }
  }

  @action
  resetUser() {
    localStore.deleteItem(config.localStoreKey.user);
    this.user = null;
    this.terraStationConnected = false;
    this.cartSize = 0;
    this.cart = [];
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
  async getUserBalances(address: string) {
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
  public setRetailer(retailer: string) {
    localStore.set(config.localStoreKey.retailer, retailer);
    this.retailer = retailer;
  }

  @action 
  public setDomain(domain: string) {
    localStore.set(config.localStoreKey.domain, domain);
    this.domain = domain;
  }

  @action 
  public setRegion(region: string) {
    localStore.set(config.localStoreKey.region, region);
    this.region = region;
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
  public getRetailer() {
    try {
      if (localStore.isAvailable()) {
        const retailer = localStore.get(config.localStoreKey.retailer);
        return (retailer && retailer !== null) ? retailer : 'amazon'; // Fallback to 'en'
      }
    } catch (err) {
      console.error(err);
      return 'amazon';
    }
  }

  @action
  public getRegion() {
    try {
      if (localStore.isAvailable()) {
        const region= localStore.get(config.localStoreKey.region);
        return (region && region !== null) ? region : 'USD'; // Fallback to 'USD'
      }
    } catch (err) {
      console.error(err);
      return 'USD';
    }
  }

  @action
  public getDomain() {
    try {
      if (localStore.isAvailable()) {
        const domain = localStore.get(config.localStoreKey.domain);
        return (domain && domain !== null) ? domain : 'amazon.com'; // Fallback to 'en'
      }
    } catch (err) {
      console.error(err);
      return 'amazon.com';
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
  
  @action
  public setEmail(email: string) {
    const auth = { ...this.getAuth() as IAuth, email};
    localStore.set(config.localStoreKey.auth, aesEncryptData(auth, config.kadoClient.aes));
    this.auth = auth;
  }

  public getUserSpendingLast24Hours = async (): Promise<{
    success: boolean;
    message: string | any;
    data?: {
      limit?: number;
      orders?: any;
      sum?: string;
    }}> => {
    try {
      if (this.auth) {
        return await getUserSpending24Hours(this.auth.userId);
      }

      return {
        success: false,
        message: 'An error occurred getting your daily spending limit.'
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err };
    }
  }

  public getUserStakingStatus = async (): Promise<any> => {
    try {
      if (this.auth && this.user) {
        return await getStakingStatus(this.auth.userId, this.user.address);
      }
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: err
      }
    }
  }

  public addItemToCart = async (item): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const res = await addToCart(this.auth.userId, item);
        if (res && res.success) {
          let updatedCart = [...this.cart];
          updatedCart.push(res.item);
          this.cart = updatedCart;
          this.setCartLength();
          return res.item;
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  public getUserCart = async (): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const cart = await getCart(this.auth.userId);
        this.cart = cart.data.activeCart;
        return cart;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public removeFromCart = async(itemId: string):Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const cart = await removeCartItem(this.auth.userId, itemId);
        this.cart = cart.data.activeCart;
        this.setCartLength();
        return cart;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public setCartLength = async():Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const cartInfo = await getCartLength(this.auth.userId);
        this.cartSize = cartInfo.length;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public updateItemQuantity = async(itemId: string, quantity: number):Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const cart = await updateCartItemQuantity(this.auth.userId, itemId, quantity);
        this.cart = cart.data.activeCart;
        this.setCartLength();
        return cart;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public getOrderDetails = async(orderId: string):Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const order = await getOrderDetails(this.auth.userId, orderId);
        return order;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public getPrizeList = async(): Promise<any> => {
    try {
      const prizeList = await getPrizeList();
      return prizeList;
    } catch (err) {
      console.error(err);
    }
  }

  public getPrizeHistory = async(): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const prizeHistory = await getPrizeHistory(this.auth.userId);
        return prizeHistory;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public getNewPrize = async(): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const newPrize = await getNewPrize(this.auth.userId);
        return newPrize;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public getCurrentPrize = async(): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const newPrize = await getCurrentPrize(this.auth.userId);
        return newPrize;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public issuePrize = async(prizeIndex: number): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const newPrize = await issuePrize(prizeIndex, this.auth.userId);
        return newPrize;
      }
    } catch (err) {
      console.error(err);
    }
  }

  public bumpWaitlist = async(): Promise<any> => {
    try {
      if (this.auth && this.auth.userId) {
        const waitlistRes = await bumpWaitlist(this.auth.userId);
        return waitlistRes;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

// decorate(UserStore, {
//   user: observable,
//   locale: observable,
//   auth: observable,
//   userExists: computed,
//   cart: observable,
//   cartSize: observable,
// });
