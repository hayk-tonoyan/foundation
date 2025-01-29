import { createSlice } from '@reduxjs/toolkit';

import { WebsiteDataState } from './type';

const initialState = {
  previewUrl: '',
  redirectUrl: '',
  promptValue: '',
  defaultUrlValue: '',
  defaultPromptValue: '',
  isPreviewLoading: false,
  hooryConversationId: 0,
};

export const websiteDataSlice = createSlice({
  name: 'websiteData',
  initialState,
  reducers: {
    setPreviewUrl(state: WebsiteDataState, action: { payload: string }) {
      state.previewUrl = action.payload;
    },
    setRedirectUrl(state: WebsiteDataState, action: { payload: string }) {
      state.redirectUrl = action.payload;
    },
    setPromptValue(state: WebsiteDataState, action: { payload: string }) {
      state.promptValue = action.payload;
    },
    setDefaultUrlValue(state: WebsiteDataState, action: { payload: string }) {
      state.defaultUrlValue = action.payload;
    },
    setIsPreviewLoading(state: WebsiteDataState, action: { payload: boolean }) {
      state.isPreviewLoading = action.payload;
    },
    setDefaultPromptValue(
      state: WebsiteDataState,
      action: { payload: string }
    ) {
      state.defaultPromptValue = action.payload;
    },
    setHooryConversationId(
      state: WebsiteDataState,
      action: { payload: number }
    ) {
      state.hooryConversationId = action.payload;
    },
  },
});

export const {
  setPreviewUrl,
  setRedirectUrl,
  setPromptValue,
  setDefaultUrlValue,
  setIsPreviewLoading,
  setDefaultPromptValue,
  setHooryConversationId,
} = websiteDataSlice.actions;

export default websiteDataSlice.reducer;
