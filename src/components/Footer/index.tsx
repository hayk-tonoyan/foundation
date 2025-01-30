import Image from "next/image";

import WhatsappIcon from "@/assets/svg/whatsapp.svg";
import { MEMBERS } from '@/common/constants';

import './index.css';

const Footer = () => {
  return (
    <div className="footer-holder">
      <div className="footer">
        <div className="bank-info">
          <p className="info-title">Bank</p>
          <ul>
            <li>Stichting Hay Network</li>
            <li>NL92INGB0108325733</li>
            <li>KVK Number: 92743234</li>
          </ul>
        </div>
        <div className="contact-info">
          <p className="info-title">Contacts</p>
          <ul>
            {Object.entries(MEMBERS).map(([key, { name, phone, whatsapp }]) => (
              phone && (
                <li key={key}>
                  <a href={`tel:${phone}`}>
                    {name}: {phone}
                    {whatsapp && (<Image src={WhatsappIcon} alt="whatsapp"/>)}
                  </a>
                </li>
              )))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
