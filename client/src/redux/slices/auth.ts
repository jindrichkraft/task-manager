import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { IAuthData } from '../../typings/auth';

interface IInitialStateDefaultObject {
  authData: IAuthData | null | undefined;
}

const INITIAL_STATE: IInitialStateDefaultObject = {
  authData: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthData>) => {
      state.authData = action.payload;
    },
    resetAuth: (state) => {
      state.authData = null;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;
