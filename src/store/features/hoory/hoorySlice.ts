import { createSlice } from '@reduxjs/toolkit';

import { HooryStateType } from './type';

const initialState: HooryStateType = null;

export const hoorySlice = createSlice({
  name: 'hoory',
  initialState,
  reducers: {
    setHoory<HooryStateType>(
      _: HooryStateType,
      action: { payload: HooryStateType }
    ) {
      return action.payload;
    },
  },
});

export const { setHoory } = hoorySlice.actions;
export default hoorySlice.reducer;
