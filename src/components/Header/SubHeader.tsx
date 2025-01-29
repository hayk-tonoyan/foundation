import {useTranslations} from "next-intl";

export default function SubHeader() {
  const t = useTranslations();

  return (
    <div className="contact-panel">
      <a href="tel:+37477060591">{t('callUs')}: +37477060591</a>
      <a href="mailto:info@hay-network.com">{t('emailUs')}: info@hay-network.com</a>
    </div>
  );
};
