import './index.css';

export default function DonatePage() {
  return (
    <div className="donate-page-holder page">
      <h2 className="page-title">Donate</h2>
      <div className="donate-page">
        <div className="page-poster">
          <img src="https://www.hay-network.com/wp-content/themes/prime-charity-trust/assets/images/default-header.jpg" alt="donate"/>
        </div>
        <div className="page-info">
          <div className="donate-qr">
            <img src="https://www.hay-network.com/wp-content/uploads/2024/11/IMG_4817.jpeg" alt="donate-qr"/>
          </div>
          <div className="bank-info">
            <h3>BANK ACCOUNT</h3>
            <p>Stichting Hay Network</p>
            <p>NL92INGB0108325733</p>
          </div>
        </div>
      </div>
    </div>
  );
};
