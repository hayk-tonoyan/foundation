import {useTranslations} from "next-intl";

import Logo from '../../assets/png/logo.png';

import './index.css';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="about-holder page">
      <h2 className="page-title">{t('aboutUs')}</h2>
      <div className="about">
        <div className="about-image">
          <img
            src={Logo.src}
            alt="about"/>
        </div>
        <div className="about-content">
          <p>{t('aboutDescription')}</p>
        </div>
      </div>
    </div>
  );
}
