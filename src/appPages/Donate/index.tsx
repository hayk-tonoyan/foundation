import {useTranslations} from "next-intl";

import QRImage from '@/assets/png/qr.jpg';

import './index.css';

export default function DonatePage() {
  const t = useTranslations();

  return (
    <div className="donate-page-holder page">
      <h2 className="page-title ellipsis">Donate</h2>
      <div className="donate-page">
        <div className="page-poster">
        </div>
        <div className="page-info">
          <div className="donate-qr">
            <img src={QRImage.src} alt="donate-qr"/>
          </div>
          <div className="bank-info">
            <h3>BANK ACCOUNT</h3>
            <p>Stichting Hay Network</p>
            <p>NL92INGB0108325733</p>
            <p>{t('swiftCode')}: INGBNL2A</p>
          </div>
        </div>
      </div>
    </div>
  );
};
