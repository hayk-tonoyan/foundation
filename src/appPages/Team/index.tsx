import Image from "next/image";
import {useTranslations} from "next-intl";

import WhatsappIcon from '@/assets/svg/whatsapp.svg';
import {MEMBERS} from "@/common/constants";

import './index.css';

export default function TeamPage() {
  const t = useTranslations();

  return (
    <div className="team-page-holder page">
      <h2 className="page-title">{t('team')}</h2>
      <div className="team-page">
        {Object.entries(MEMBERS).map(([key, { name, avatar, phone, whatsapp }]) => (
          <div key={key} className="team-member-card">
            <img src={avatar} alt="profile"/>
            <h3>{key}</h3>
            <h2>{name}</h2>
            <a href={`tel:${phone}`}>
              {phone}
              {whatsapp && (<Image src={WhatsappIcon} alt="whatsapp"/>)}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
