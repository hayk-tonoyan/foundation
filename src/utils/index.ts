import Cookies from 'js-cookie';

import {
  getHooryConversationClientSide,
  getHooryUserClientSide,
} from '@/actions/client/hooryActions';
import { SESSION_STORAGE_WEBSITE_KEY } from '@/common/constants';
// import {
//   getHooryConversation,
//   getHooryUser,
// } from '@/serverActions/hooryActions';

import {
  RUDDERSTUCK_ANONYMOUS_ID,
  RUDDERSTUCK_SESSION_ID,
} from '../hooks/useInitRudderstackAnalytics';

export const isUrlValid = (userInput: string) => {
  const res = userInput.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/g
  );
  return !!res;
};

export const TAGS_SEPARATOR = 'and';

export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value, {
    // path: '/api/website-generation/user-generations',
    // secure: true, // Ensures cookie is only sent over HTTPS
    // sameSite: 'None', // Controls when the cookie is sent with cross-origin requests
  });
};

export const getCookie = (name: string): string | undefined =>
  Cookies.get(name);

export const deleteCookie = (name: string) => {
  Cookies.remove(name);
};

export function setLocalStorage<T>(key: string, value: T): null | undefined {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue =
        typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch {
      return null;
    }
  }
}

export function getLocalStorage<T>(key: string): T | null | undefined {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue === null
        ? null
        : (JSON.parse(serializedValue) as T);
    } catch {
      return null;
    }
  }
}

export const getUserUtcOffset = () => {
  const offsetInMinutes = new Date().getTimezoneOffset();
  return -(offsetInMinutes / 60);
};

export const convertToUserTime = (isoString: string) => {
  const date = new Date(isoString);
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime = new Date(utcTime + getUserUtcOffset() * 3600000);

  const formattedDate = `${localTime.getDate()}.${localTime.getMonth() + 1}.${localTime.getFullYear()}`;
  const formattedTime = localTime.toLocaleTimeString();

  return `${formattedDate}, ${formattedTime}`;
};

export function hasUrlWithoutPath(input: string): boolean {
  const regex = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?=\s|$)/;

  return regex.test(input);
}

export type AnalyticsHeaders = {
  'X-Anonymous-Id': string;
  'X-Analytics-Session-Id': string;
};

export const getAnalyticsHeaders = (): AnalyticsHeaders => {
  if (typeof localStorage === 'undefined') {
    return {
      'X-Anonymous-Id': '',
      'X-Analytics-Session-Id': '',
    };
  }

  const sessionId = localStorage.getItem(RUDDERSTUCK_SESSION_ID) || '';
  const anonymousId = localStorage.getItem(RUDDERSTUCK_ANONYMOUS_ID) || '';

  return {
    'X-Anonymous-Id': anonymousId,
    'X-Analytics-Session-Id': sessionId,
  };
};

export const updatedWebsitesStorage = async (
  val: object,
  queryGenerationId: string
) => {
  const storedArray = sessionStorage.getItem(SESSION_STORAGE_WEBSITE_KEY);
  const websites: { queryGenerationId: string; conversation_id: string }[] =
    (storedArray && (await JSON.parse(storedArray))) || [];
  const hasItem = websites.find(
    (website) =>
      (website?.queryGenerationId || website?.conversation_id) ===
      queryGenerationId
  );

  if (!hasItem) {
    sessionStorage.setItem(
      SESSION_STORAGE_WEBSITE_KEY,
      JSON.stringify([...websites, { ...val, queryGenerationId }])
    );
  }
};

export const handleUseTemplate = async (
  redirectUrl: string,
  id?: string,
  fn?: ((id: string) => void) | false,
  blank?: boolean
) => {
  if (!blank) {
    window.open(redirectUrl, '_blank');
  } else {
    window.location.href = redirectUrl;
  }
  if (fn && id) {
    fn(id);
  }
};

export const setHooryUser = async (hooryUser: { identifier: string }) => {
  window.$hoory?.setUser(hooryUser?.identifier, {
    ...hooryUser,
    name: Date.now().toString(),
  });
};

export const getHooryConversationClientSideWrapper = async (email: string) => {
  const analyticsHeaders = getAnalyticsHeaders();
  try {
    // TODO: Server action
    // const data = await getHooryConversation(analyticsHeaders, email);
    const data = await getHooryConversationClientSide(analyticsHeaders, email);
    return data;
  } catch {
    // TODO: Server action
    // const hooryUser = await getHooryUser(analyticsHeaders, true);
    const hooryUser = await getHooryUserClientSide(analyticsHeaders, true);
    await setHooryUser(hooryUser);
    // TODO: Server action
    // const data = await getHooryConversation(
    //   analyticsHeaders,
    //   hooryUser?.email || ''
    // );
    const data = await getHooryConversationClientSide(
      analyticsHeaders,
      hooryUser?.email || ''
    );
    return data;
  }
};
