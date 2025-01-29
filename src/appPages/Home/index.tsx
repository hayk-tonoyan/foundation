import Image from "next/image";
import {useTranslations} from "next-intl";

import AboutPage from "@/appPages/About";
import HelpPage from "@/appPages/Help";
import Slider from "@/components/Slider";

import image from '../../assets/png/img.png';

import './index.css';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <div className="home-holder page">
        <Slider/>
        <div className="help">
          <div className=""></div>
        </div>
      </div>
      <div className="animated-section">
        <div className="animated-section-info">
          <p>
            <strong>{t('investInArmeniasFutureTitle')}</strong>
            <span>{t('investInArmeniasFutureDescription')}</span>
          </p>
          <p>
            <strong>{t('whyNowTitle')}</strong>
            <span>{t('whyNowDescription')}</span>
          </p>
          <p>
            <strong>{t('howCanYouHelpTitle')}</strong>
            <span>{t('howCanYouHelpDescription')}</span>
          </p>
          <p>
            <strong>{t('thankYouForYourSupportTitle')}</strong>
            <span>{t('thankYouForYourSupportDescription')}</span>
          </p>
        </div>
        <div className="animated-section-image">
          <Image src={image} alt="Hay Network"/>
        </div>
      </div>
      <AboutPage/>
      <HelpPage/>
    </>
  );
}
