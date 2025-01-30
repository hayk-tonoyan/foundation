'use client';

import {useTranslations} from "next-intl";

import useDeviceDetector from "@/hooks/useDeviceDetector";

export default function SubHeader() {
  const t = useTranslations();

  const { isMobile } = useDeviceDetector();

  return (
    <div className="contact-panel">
      <a href="tel:+37477060591">
        {!isMobile && (
          <>
            <span className="ellipsis">{t('callUs')}</span>
            <span style={{ marginInlineEnd: '4px' }}>:</span>
          </>
        )}
        +37477060591
      </a>
      <a href="mailto:info@hay-network.com">
        {!isMobile && (
          <>
            <span className="ellipsis">{t('emailUs')}</span>
            <span style={{ marginInlineEnd: '4px' }}>:</span>
          </>
        )}
        info@hay-network.com
      </a>
    </div>
  );
};
