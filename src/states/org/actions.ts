import { createAction } from '@reduxjs/toolkit';
import { OrgState } from './types';

export const updateConfigAction = createAction<OrgState>(
  'org/updateConfig'
);
