import {NextRequest, NextResponse, userAgent} from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { LangMappingEnum } from '@/common/enums';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  const response = createMiddleware({
    locales: Object.values(LangMappingEnum),
    defaultLocale: LangMappingEnum.nl,
    localePrefix: 'as-needed',
  })(request);

  response.headers.set('x-url', request.url);
  const { device } = userAgent(request);
  const isMobile = device.type === 'mobile';

  const url = request.nextUrl.clone();

  if (pathname.includes('admin')) {
    response.cookies.set('admin', 'true');
  } else {
    response.cookies.set('admin', 'false');
  }

  const hasMobileParam = url.searchParams.has('isMobile');

  if (!hasMobileParam) {
    if (isMobile) {
      url.searchParams.set('isMobile', isMobile.toString());
    } else {
      url.searchParams.delete('isMobile');
    }
  } else if (hasMobileParam && !isMobile) {
    url.searchParams.delete('isMobile');
  }

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

// <script type="module">
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD0PtcSH8MMqeXlar058cYs2XNGu0Zs9GM",
//   authDomain: "hay-netowrk.firebaseapp.com",
//   projectId: "hay-netowrk",
//   storageBucket: "hay-netowrk.firebasestorage.app",
//   messagingSenderId: "24880228662",
//   appId: "1:24880228662:web:fc05c8245537bf66cfeb97"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// </script>