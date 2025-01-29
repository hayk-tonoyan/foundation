import {useTranslations} from "next-intl";

import './index.css';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="about-holder page">
      <h2 className="page-title">{t('aboutUs')}</h2>
      <div className="about">
        <div className="about-image">
          <img
            src="https://www.hay-network.com/wp-content/uploads/2024/11/cropped-421769316_407595915109901_9175327298925973249_n-1.jpg"
            alt="about"/>
        </div>
        <div className="about-content">
          <p>{t('aboutDescription')}</p>
        </div>
      </div>
    </div>
  );
}
