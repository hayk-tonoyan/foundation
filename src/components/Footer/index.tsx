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
            <li>Murat Yildiz +31651852165</li>
            <li>Tigran Pogosian +37477060591</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
