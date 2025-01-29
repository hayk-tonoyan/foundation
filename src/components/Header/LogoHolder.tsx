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
      {isMobile ? (
        <Image priority width={50} height={50} src="https://www.hay-network.com/wp-content/uploads/2024/11/cropped-logo-1-e1730941018156.png" alt="mobile-logo" />
      ) : (
        <Image priority width={100} height={100} src={Logo} alt="logo" />
      )}
      <div className="logo-slogan">
        <p>Hay Network | {t('makeMiraclesHappen')}</p>
      </div>
    </StyledLogoHolder>
  );
}
