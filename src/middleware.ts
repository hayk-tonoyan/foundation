import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { LangMappingEnum } from '@/common/enums';

export async function middleware(request: NextRequest) {
  const response = createMiddleware({
    locales: Object.values(LangMappingEnum),
    defaultLocale: LangMappingEnum.en,
    localePrefix: 'as-needed',
  })(request);

  response.headers.set('x-url', request.url);

  const url = request.nextUrl.clone();

  if (url.href !== request.url) {
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|assets|favicon.ico).*)',
    '/',
    '/(en)/(:path*|:param*)',
  ],
};
