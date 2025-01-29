import { createSlice } from '@reduxjs/toolkit';

import { TUserState } from './type';

const initialState: TUserState = {
  info: {
    id: '',
    email: '',
    avatar: '',
    isTester: '',
    lastName: '',
    fullName: '',
    firstName: '',
    avatarUrl: '',
    createdAt: '',
    safeToSendEmails: '',
    receiveNewsletter: '',
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(
      state: TUserState,
      action: { payload: Record<string, string> }
    ) {
      state.info = action.payload;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.info = initialState.info;
      state.isLoggedIn = false;
    },
  },
});

export const { setUserInfo, removeUser } = userSlice.actions;
export default userSlice.reducer;
