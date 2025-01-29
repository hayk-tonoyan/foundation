'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {useTranslations} from "next-intl";
import React, { useMemo } from 'react';

import useDeviceDetector from '@/hooks/useDeviceDetector';

import { StyledLogoHolder } from './style';
import Logo from '../../assets/png/logo.png';

export default function LogoHolder() {
  const t = useTranslations();

  const router = useRouter();
  const { isMobile } = useDeviceDetector();
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === '/', [pathname]);
  const isPreviewPage = useMemo(() => pathname === '/preview', [pathname]);

  return (
    <StyledLogoHolder
      className={`${isPreviewPage ? 'disabled' : ''}`}
      onClick={() => (isHomePage ? window.location.reload() : router.push('/'))}
    >
      <Image priority width={100} height={100} src={Logo} alt="mobile-logo"/>
      {!isMobile && (
        <div className="logo-slogan">
          <p>Hay Network | {t('makeMiraclesHappen')}</p>
        </div>

      )}
    </StyledLogoHolder>
  );
}
