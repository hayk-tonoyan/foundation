import { Dispatch, SetStateAction } from 'react';

export type HoorySettingsType = {
  forceManualLinkManagement?: boolean;
  hideMessageBubble?: boolean;
  escapeUnreadView?: boolean;
  autoOpenUnreadConversation?: boolean;
};

export type HooryStateType = {
  autoOpenUnreadConversation: boolean;
  forceManualLinkManagement: boolean;
  settings?: { showPopoutButton?: boolean; hideMessageBubble?: boolean };
  toggle: () => void;
  setSettings: Dispatch<SetStateAction<HoorySettingsType>>;
} | null;
