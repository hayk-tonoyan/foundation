import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { META_DESCRIPTION, META_TITLE } from '@/common/constants';
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/Header";
import Header from "@/components/Header/Header";
import SubHeader from "@/components/Header/SubHeader";
import { Toaster } from '@/components/ui/toaster';
import getLocale from '@/i18n/request';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import StoreProvider from '@/providers/StoreProvider';
import StyledComponentsProvider from '@/providers/StyledComponentsProvider';

import { StyledAppWrapper } from './style';

import './globals.css';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  // icons: [
  //   {
  //     rel: 'icon',
  //     sizes: '32x32',
  //     type: 'image/png',
  //     media: '(prefers-color-scheme: light)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_LIGHT}/favicon-32x32.png`,
  //   },
  //   {
  //     rel: 'icon',
  //     sizes: '16x16',
  //     type: 'image/png',
  //     media: '(prefers-color-scheme: light)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_LIGHT}/favicon-16x16.png`,
  //   },
  //   {
  //     sizes: '180x180',
  //     type: 'image/png',
  //     rel: 'apple-touch-icon',
  //     media: '(prefers-color-scheme: light)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_LIGHT}/apple-touch-icon.png`,
  //   },
  //   {
  //     rel: 'mask-icon',
  //     color: '#5bbad5',
  //     type: 'image/svg+xml',
  //     media: '(prefers-color-scheme: light)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_LIGHT}/safari-pinned-tab.svg`,
  //   },
  //   // {
  //   //   rel: "manifest",
  //   //   media: "(prefers-color-scheme: light)",
  //   //   url: `${GET_GOOGLE_STORAGE_FAVICONS_LIGHT}/site.webmanifest`,
  //   // },
  //   {
  //     rel: 'icon',
  //     sizes: '32x32',
  //     type: 'image/png',
  //     media: '(prefers-color-scheme: dark)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_DARK}/favicon-32x32.png`,
  //   },
  //   {
  //     rel: 'icon',
  //     sizes: '16x16',
  //     type: 'image/png',
  //     media: '(prefers-color-scheme: dark)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_DARK}/favicon-16x16.png`,
  //   },
  //   {
  //     sizes: '180x180',
  //     type: 'image/png',
  //     rel: 'apple-touch-icon',
  //     media: '(prefers-color-scheme: dark)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_DARK}/apple-touch-icon.png`,
  //   },
  //   {
  //     rel: 'mask-icon',
  //     color: '#5bbad5',
  //     type: 'image/svg+xml',
  //     media: '(prefers-color-scheme: dark)',
  //     url: `${GET_GOOGLE_STORAGE_FAVICONS_DARK}/safari-pinned-tab.svg`,
  //   },
  //   // {
  //   //   rel: "manifest",
  //   //   media: "(prefers-color-scheme: dark)",
  //   //   url: `${GET_GOOGLE_STORAGE_FAVICONS_DARK}/site.webmanifest`,
  //   // },
  // ],
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Promise<string> }>;
}>) {
  const props = await params;
  const locale = await props.lang;

  const { messages } = await getLocale({
    requestLocale: props.lang,
    locale: locale,
  });

  return (
    <html lang={locale}>
      {/*<head>*/}
      {/*  <meta property="og:title" content={META_TITLE} />*/}
      {/*  <meta property="og:description" content={META_DESCRIPTION} />*/}
      {/*  <meta*/}
      {/*    property="og:image"*/}
      {/*    content={`${process.env.NEXT_PUBLIC_STATIC_UCRAFT_URL}/copilot.png`}*/}
      {/*  />*/}
      {/*  <meta property="og:type" content="website" />*/}
      {/*</head>*/}
      <body>
        <ReactQueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StyledComponentsProvider>
              <div className="main-wrapper">
                <HeaderWrapper>
                  <SubHeader />
                  <Header/>
                </HeaderWrapper>
                <StyledAppWrapper>
                  {children}
                </StyledAppWrapper>
                <Footer />
                <Toaster />
              </div>
            </StyledComponentsProvider>
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
