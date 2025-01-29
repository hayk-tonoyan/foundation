'use client';

// import React, { useState } from 'react';
// // @ts-ignore
// import { Worker, Viewer } from 'react-pdf-viewer';

export default function Anbi() {
  // const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="anbi-page-holder page">
      <h2 className="page-title">ANBI</h2>
      <div className="anbi-page">
        <div className="anbi-content">
          <p><strong>KVK-nummer: </strong>92743234</p>
          <p><strong>RSIN: </strong>866158959</p>
          <p><strong>Rekeningnummer: </strong>NL92INGB0108325733</p>
          <p><strong>Postadres: </strong>Smaragd 123, 5231 KH ‘s-Hertogenbosch</p>
          <p><strong>Telefoon: </strong>+31651852165</p>
          <p><strong>E-mail: </strong>info@hay-network.com</p>
          <p>
            <strong>Missie</strong>
            <br/>
            Stichting Hay Network is een organisatie die zich inzet voor de ondersteuning en verbetering van het welzijn van de Armeense diaspora en hulpbehoevenden met Armeense wortels.
          </p>
          <div>
            <p><strong>Doelstellingen</strong></p>
            <ul>
              <li>Het bieden van ondersteuning bij onderwijs voor de Armeense diaspora.</li>
              <li>Het verlenen van humanitaire hulp aan hulpbehoevenden met Armeense wortels.</li>
              <li>Het bieden van hulp aan weeshuizen, ouderen en mensen met een handicap.</li>
              <li>Het creëren van samenwerkingsverbanden, alsmede het versterken en stimuleren van Nederlandse organisaties, bedrijven en overheden voor projecten, alles in de ruimste zin van het woord.</li>
            </ul>
          </div>
          <div>
            <p><strong>Hoofddoelen beleidsplan</strong></p>
            <ul>
              <li>Het verzoeken van onderwijsinstellingen om ondersteuning te bieden, onder andere in benodigdheden (materialen), en het geven van advies.</li>
              <li>Het vragen van (materiële) hulp aan bedrijven, (overheid)instanties en individuen.</li>
              <li>Het organiseren van bijeenkomsten om geld en/of goederen in te zamelen.</li>
              <li>Het vragen van ziekenhuizen en andere gezondheidsinstellingen om (afgeschreven) materialen te doneren.</li>
              <li>Het zoeken naar stageplekken en -opdrachten en online banen voor afgestudeerden, alles in de ruimste zin van het woord.</li>
            </ul>
          </div>
          <div>
            <p><strong>Samenstelling van het bestuur:</strong></p>
            <p>
              <span>Voorzitter:</span>
              <span>T. Pogosian</span>
            </p>
            <p>
              <span>Secretaris:</span>
              <span>M. Yildiz</span>
            </p>
            <p>
              <span>Penningmeester:</span>
              <span>G. Akopian</span>
            </p>
          </div>
          <p>
            <strong>Beloningsbeleid en vergoedingen</strong>
            <br/>
            Buiten de vergoeding van de door hen gemaakte kosten, ontvangen de bestuursleden en vrijwilligers geen beloning voor hun diensten aan de stichting.
          </p>
        </div>
        <div className="pdf-viwers">
          {/*<div style={{flex: 1, margin: '0 10px'}}>*/}
          {/*  <Viewer*/}
          {/*    fileUrl="/pdf1.pdf"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
