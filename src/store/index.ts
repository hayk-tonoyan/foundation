import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { hoorySlice } from './features/hoory/hoorySlice';
import { userSlice } from './features/user/userSlice';
import { websiteDataSlice } from './features/websiteData/websiteDataSlice';

const rootReducer = combineSlices(userSlice, hoorySlice, websiteDataSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({ serializableCheck: false });
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
