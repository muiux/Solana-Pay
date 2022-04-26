import { createAction } from "@reduxjs/toolkit";
import { IAuth, IUser } from "./types";

export const updateUserAction = createAction<IUser | undefined>(
  "user/updateUser"
);

export const updateAuthAction = createAction<IAuth | undefined>(
  "user/updateAuth"
);

export const updateTerraStationConnectedAction = createAction<boolean>(
  "user/updateTerraStationConnected"
);

export const updateLocaleAction = createAction<string>("user/updateLocale");
