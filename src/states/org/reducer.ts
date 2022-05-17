import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';

import { updateConfigAction } from './actions';
import { OrgState } from './types';

const initialState: OrgState = {
  orgName: undefined,
  wallets: [],
  apiPublicKey: undefined,
};

export default createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<OrgState>) =>
    builder
      .addCase(updateConfigAction, (state, action) => {
        return { ...state, ...action.payload };
      })
);
