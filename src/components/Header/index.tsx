'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';

import useDeviceDetector from '@/hooks/useDeviceDetector';
import { getWebsiteData } from '@/store/features/websiteData/selectors';

import { StyledHeaderWrapper } from './style';

const HeaderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isMobile } = useDeviceDetector();
  const pathname = usePathname();
  const { redirectUrl } = useSelector(getWebsiteData);

  const isPreviewPage = useMemo(() => pathname === '/preview', [pathname]);
  const showHeader = isMobile && !redirectUrl && isPreviewPage;

  return <StyledHeaderWrapper>{!showHeader && children}</StyledHeaderWrapper>;
};

export default HeaderWrapper;
