import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { getAuth } from '@/lib/firebase-admin';

const DAY_COUNT = 1;

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  await getAuth().verifyIdToken(idToken);

  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await getAuth().createSessionCookie(idToken, { expiresIn });

  const cookieStore = await cookies();
  cookieStore.set('session', sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * DAY_COUNT,
  });

  return NextResponse.json({ status: 'success' });
}
