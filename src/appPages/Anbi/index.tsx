'use client';

import {useTranslations} from "next-intl";

import './index.css';

export default function Anbi() {
  const t = useTranslations();

  return (
    <div className="anbi-page-holder page">
      <h2 className="page-title ellipsis">ANBI</h2>
      <div className="anbi-page">
        <div className="anbi-content">
          <div className="sub-title-holder">
            <p className="sub-title">{t('mission')}</p>
            <p className="sub-title-desc">{t('compensation_policy_and_reimbursements')}</p>
          </div>
          <div className="list-view-desc">
            <p><strong>{t('goals.title')}</strong></p>
            <ul>
              {[...new Array(4)].map((_, i) => (
                <li key={i}>{t(`goals.${i + 1}`)}</li>
              ))}
            </ul>
          </div>
          <div className="list-view-desc">
            <p><strong>{t('main_goals_policy_plan.title')}</strong></p>
            <ul>
              {[...new Array(5)].map((_, i) => (
                <li key={i}>{t(`main_goals_policy_plan.${i + 1}`)}</li>
              ))}
            </ul>
          </div>
          <div className="information-desc">
            <p>{t('kvk_number')}</p>
            <p>{t('rsin')}</p>
            <p>{t('account_number')}</p>
            <p>{t('postal_address')}</p>
            <p>{t('phone')}</p>
            <p>{t('email')}</p>
          </div>
        </div>
        <div className="pdf-viewers">
          <div className="pdf-container">
            <h4>Hay Network Jaarrekening 2024.pdf</h4>
            <iframe title="pdf1"
                    src="https://drive.google.com/file/d/1zB3ZDaWf3qjakmHnqe3b_1ApzzFv3fTw/preview"></iframe>
          </div>

          <div className="pdf-container">
            <h4>Beleidsplan Hay Network.pdf</h4>
            <iframe title="pdf2" src="https://drive.google.com/file/d/1TJarUQLq_7VucofeM-Db3VPFZJIS9C14/preview"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
