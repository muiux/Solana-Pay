import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';

import { updateAddressAction, updateWalletTypeAction, updateBalanceAction, updateNetworkAction, updateProviderAction } from './actions';
import { WalletState } from './types';

const initialState: WalletState = {
  address: undefined,
  walletType: undefined,
  balances: {},
  network: undefined,
  provider: undefined,
};

export default createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<WalletState>) =>
    builder
      .addCase(updateAddressAction, (state, action) => {
        return { ...state, address: action.payload };
      })
      .addCase(updateWalletTypeAction, (state, action) => {
        return { ...state, walletType: action.payload };
      })
      .addCase(updateBalanceAction, (state, action) => {
        return { ...state, balances: { ...state.balances, ...action.payload } };
      })
      .addCase(updateNetworkAction, (state, action) => {
        return { ...state, network: action.payload };
      })
      .addCase(updateProviderAction,(state, action) => {
        return { ...state, provider: action.payload };
      })
);
