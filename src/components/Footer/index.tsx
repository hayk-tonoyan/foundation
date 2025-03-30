// import Image from "next/image";
import {useTranslations} from "next-intl";

// import WhatsappIcon from "@/assets/svg/whatsapp.svg";
// import { MEMBERS } from '@/common/constants';

import './index.css';
import {SOCIAL_DATA} from "@/common/constants";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="footer-holder">
      <div className="footer">
        <div className="follow-us-holder">
          <p className="info-title">{t('followUs')}</p>
          <div className="follow-us">
            {SOCIAL_DATA.map(({name, url, logo}) => (
              <div key={url} className="social-icon-holder">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt={name}/>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/*<div className="bank-info">*/}
        {/*  <p className="info-title">{t('bank')}</p>*/}
        {/*  <ul>*/}
        {/*    <li>Stichting Hay Network</li>*/}
        {/*    <li>NL92INGB0108325733</li>*/}
        {/*    <li>{t('kvk_number')}</li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        {/*<div className="contact-info">*/}
        {/*  <p className="info-title">{t('contact')}</p>*/}
        {/*  <ul>*/}
        {/*    {Object.entries(MEMBERS).map(([key, { name, phone, whatsapp }]) => (*/}
        {/*      phone && (*/}
        {/*        <li key={key}>*/}
        {/*          <a href={`tel:${phone}`}>*/}
        {/*            {name}: {phone}*/}
        {/*            {whatsapp && (<Image src={WhatsappIcon} alt="whatsapp"/>)}*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*      )))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Footer;
