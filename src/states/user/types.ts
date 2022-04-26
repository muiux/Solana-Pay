import { LCDClient } from "@terra-money/terra.js";

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
  data?: any;
}

export interface IUser {
  address?: string;
  balances?: {
    [x: string]: number; //  TODO: BigNumber
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

export interface UserState {
  user: IUser | undefined;
  auth: IAuth | undefined;
  locale: string;
  terra: LCDClient;
  terraStationConnected: boolean;
}
