export enum PROMPT_MODES {
  Text = 'text',
  Url = 'url',
}

export enum DIRECTIONS {
  Left = 'left',
  Right = 'right',
}

export enum SHORTCUT_TYPES {
  List = 'list',
  Dropdown = 'dropdown',
}

export enum SHORTCUT_MODES {
  Single = 'single',
  Multi = 'multi',
}

export enum SHORTCUT_KEYS {
  Industry = 'industry',
  Location = 'location',
  Payment = 'payment',
  Shipping = 'shipping',
  Styles = 'styles',
  Tone_Of_Content = 'tone of content',
}

export interface IShortcut {
  key: SHORTCUT_KEYS;
  name: string;
  type: SHORTCUT_TYPES;
  mode: SHORTCUT_MODES;
  color: string;
  items: string[];
  itemsTitle?: string;
  itemsLabel?: string;
  prefix?: string;
  preventOpen?: boolean;
}

export enum BUTTON_TYPES {
  Cta = 'cta',
  Group = 'group',
  Tab = 'tab',
}

export enum VIEW_TYPES {
  PROMPT = 'prompt',
  PREVIEW = 'preview',
}

export enum URL_ERROR_TYPES {
  NO_ERROR = 'no_error',
  VALIDATION = 'validation',
  API = 'api',
}
