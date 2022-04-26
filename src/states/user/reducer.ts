import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { LCDClient } from '@terra-money/terra.js';

import config from '../../utils/config';

import {
  updateUserAction,
  updateLocaleAction,
  updateAuthAction,
  updateTerraStationConnectedAction,
} from './actions';
import { UserState } from './types';

const initialState: UserState = {
  user: undefined,
  auth: undefined,
  locale: '',
  terra: new LCDClient({
    URL: config.lcdClient.url,
    chainID: config.lcdClient.chainId,
  }),
  terraStationConnected: false,
};

export default createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<UserState>) =>
    builder
      .addCase(updateUserAction, (state, action) => {
        return { ...state, user: action.payload };
      })
      .addCase(updateAuthAction, (state, action) => {
        return { ...state, auth: action.payload };
      })
      .addCase(updateTerraStationConnectedAction, (state, action) => {
        return { ...state, terraStationConnected: action.payload };
      })
      .addCase(updateLocaleAction, (state, action) => {
        return { ...state, locale: action.payload };
      })
);
