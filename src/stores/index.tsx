import { createContext } from 'react';
import { UserStore } from './UserStore';

export const rootStoreContext = createContext({
  userStore: new UserStore()
});
