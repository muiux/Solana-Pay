import { createAction } from '@reduxjs/toolkit';
import { Cluster } from '@solana/web3.js';
import { WalletType } from './types';

export const updateAddressAction = createAction<string | undefined>(
  'wallet/updateAddress'
);

export const updateWalletTypeAction = createAction<WalletType | undefined>(
  'wallet/updateWalletType'
);

export const updateBalanceAction = createAction<{ [key: string]: number }>(
  'wallet/updateBalance'
);

export const updateNetworkAction = createAction<Cluster | undefined>(
  'wallet/updateNetwork'
);

export const updateProviderAction = createAction<any>(
  'wallet/updateProvider'
);
