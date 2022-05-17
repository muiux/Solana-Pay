import { configureStore } from '@reduxjs/toolkit';

import user from './user/reducer';
import wallet from './wallet/reducer';
import org from './org/reducer';

const store = configureStore({
  reducer: {
    user,
    wallet,
    org,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: true,
      serializableCheck: false,
    }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
