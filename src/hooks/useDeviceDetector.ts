import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 950;
// const TABLET_BREAKPOINT = 1024;

const useDeviceDetector = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window === 'undefined'
      ? false
      : window.innerWidth <= MOBILE_BREAKPOINT
  );
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window === 'undefined' ? true : window.innerWidth > MOBILE_BREAKPOINT
  );

  const handleResize = () => {
    const width = window.innerWidth;
    const mobile = width < MOBILE_BREAKPOINT;
    const desktop = width >= MOBILE_BREAKPOINT;

    setIsMobile(mobile);
    setIsDesktop(desktop);

    if (mobile) {
      document.documentElement.classList.add('mobile-device');
      document.documentElement.classList.remove('desktop-device');
    } else {
      document.documentElement.classList.add('desktop-device');
      document.documentElement.classList.remove('mobile-device');
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isDesktop };
};

export default useDeviceDetector;
