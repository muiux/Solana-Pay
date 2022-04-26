import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import * as Sentry from "@sentry/react";

import { AppState } from "..";
import { aesDecryptData, aesEncryptData } from "../../utils/aesEncrypt";
import config from "../../utils/config";
import localStore from "../../utils/localStore";
import {
  updateAuthAction,
  updateLocaleAction,
  updateTerraStationConnectedAction,
  updateUserAction,
} from "./actions";
import { UserState } from "./types";

export function useAuth() {
  const dispatch = useDispatch();
  const user: UserState = useSelector((state: AppState) => state.user);
  const { auth } = user;

  function resetUser() {
    localStore.deleteItem(config.localStoreKey.user);
    dispatch(updateUserAction(undefined));
    dispatch(updateTerraStationConnectedAction(false));
  }

  function getAuth() {
    if (auth) {
      return auth;
    }
    // from LocalStore
    if (localStore.isAvailable()) {
      const authFromLocalStore = aesDecryptData(
        localStore.get(config.localStoreKey.auth),
        config.kadoClient.aes
      );
      if (authFromLocalStore) {
        dispatch(updateAuthAction(authFromLocalStore));
        return authFromLocalStore;
      }
    }
    return null;
  }

  function setAuth(token: string) {
    if (!token) {
      return;
    }
    // localStore jwt
    localStore.set(
      config.localStoreKey.jwt,
      aesEncryptData(token, config.kadoClient.aes)
    );

    // localStore auth
    const authFromJWT = JSON.parse(jwt_decode(token));
    localStore.set(
      config.localStoreKey.auth,
      aesEncryptData(authFromJWT, config.kadoClient.aes)
    );

    Sentry.setUser({
      id: authFromJWT.userId,
      email: authFromJWT.email,
      email_verified: authFromJWT.email_verified,
    });
    dispatch(updateAuthAction(authFromJWT));
  }

  function resetAuth() {
    localStore.deleteItem(config.localStoreKey.auth);
    localStore.deleteItem(config.localStoreKey.jwt);
    dispatch(updateAuthAction(undefined));
  }

  function getJwt() {
    if (localStore.isAvailable() && localStore.get(config.localStoreKey.jwt)) {
      return aesDecryptData(
        localStore.get(config.localStoreKey.jwt),
        config.kadoClient.aes
      );
    }
    return "";
  }

  function setIsLoggedIn(isLoggedIn: boolean) {
    localStore.set(config.localStoreKey.logInStatus, isLoggedIn);
  }

  function getIsLoggedIn() {
    if (
      localStore.isAvailable() &&
      localStore.get(config.localStoreKey.logInStatus)
    ) {
      return localStore.get(config.localStoreKey.logInStatus);
    }
    resetAuth();
    resetUser();
    return undefined;
  }

  return {
    auth,
    getAuth,
    setAuth,
    getJwt,
    setIsLoggedIn,
    getIsLoggedIn,
  };
}

export function useLocale() {
  const dispatch = useDispatch();

  function getLocale() {
    if (localStore.isAvailable()) {
      const locale = localStore.get(config.localStoreKey.locale);
      return locale && locale !== null ? locale : "en"; // Fallback to 'en'
    }
    return "en";
  }

  function setLocale(locale: string) {
    localStore.set(config.localStoreKey.locale, locale);
    dispatch(updateLocaleAction(locale));
  }

  return {
    getLocale,
    setLocale,
  };
}

export function useWallet() {
  const dispatch = useDispatch();
  const userState: UserState = useSelector((state: AppState) => state.user);
  const { user, terraStationConnected, terra } = userState;

  const address = user?.address;
  const balances = user?.balances;

  async function getTerraBalancesByAddress(address: string) {
    const [balance]: any = await terra.bank.balance(address);

    const ustToken = balance.toData().find((x) => x.denom === "uusd");
    if (ustToken) {
      const { amount } = ustToken;
      dispatch(updateUserAction({ address, balances: { ust: amount } }));
    }
  }

  function updateUserWalletAddress(address: string) {
    if (!terraStationConnected) {
      localStore.set(
        config.localStoreKey.user,
        aesEncryptData({ address }, config.kadoClient.aes)
      );

      dispatch(updateUserAction({ address, balances }));
      dispatch(updateTerraStationConnectedAction(true));
    }
  }

  return {
    address,
    balances,
    updateUserWalletAddress,
    getTerraBalancesByAddress,
  };
}
