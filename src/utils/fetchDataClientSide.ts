import { ACCESS_TOKEN, BEARER } from '@/common/constants';

import { getCookie } from '.';

export const fetchDataClientSide = async (
  url: string,
  isSecure: boolean = true,
  options: {
    headers?: object;
    method?: string;
    body?: string;
    credentials?: RequestCredentials;
    signal?: AbortSignal;
  } = {}
) => {
  const accessToken = getCookie(ACCESS_TOKEN);

  if (!accessToken && isSecure) return;

  try {
    const response: Response = await fetch(url, {
      ...options,
      headers: {
        ...(options?.headers ? options?.headers : {}),
        Authorization: `${BEARER} ${accessToken}`,
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetching failed:', error);
    throw error;
  }
};
