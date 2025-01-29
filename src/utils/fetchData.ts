'use server';

import { cookies } from 'next/headers';

import { ACCESS_TOKEN, BEARER } from '@/common/constants';

export const fetchData = async (
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
  const allCookies = await cookies();
  const accessToken = allCookies.get(ACCESS_TOKEN)?.value;

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

    if (response.status === 204) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetching failed:', error);
    throw error;
  }
};
