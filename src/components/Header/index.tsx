'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';

import useDeviceDetector from '@/hooks/useDeviceDetector';

import { StyledHeaderWrapper } from './style';

const HeaderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isMobile } = useDeviceDetector();
  const pathname = usePathname();

  const isPreviewPage = useMemo(() => pathname === '/preview', [pathname]);
  const showHeader = isMobile && isPreviewPage;

  return <StyledHeaderWrapper>{!showHeader && children}</StyledHeaderWrapper>;
};

export default HeaderWrapper;
