'use client';

import Link from "next/link";
import {useTranslations} from "next-intl";
import { useMemo } from "react";


import './index.css';
import {helpData} from "@/common/constants";

export default function HelpPage() {
  const t = useTranslations();

  const helpInfo = useMemo(
    () =>
      helpData.map(({ title, description, imageSrc }) => (
        <div key={title}>
          <Link href={`/help/${encodeURIComponent(title.replace(/ /g, '-'))}`}>
            <div className="help-card">
              <div className="help-info">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <img src={imageSrc} alt={title} />
            </div>
          </Link>
        </div>
      )),
    [helpData]
  );

  return (
    <div className="help-page-holder page">
      <h2 className="page-title">{t('livesYouCanChange')}</h2>
      <div className="help-page">{helpInfo}</div>
    </div>
  );
};

// 'use client';
//
// import Link from "next/link";
// import {useMemo} from "react";
//
// import {helpData} from "@/components/Slider";
//
// import './index.css';
//
// export default function HelpPage() {
//   const helpInfo = useMemo(() => helpData.map(({ title, description, imageSrc }) => (
//     <div key={title}>
//       <div className="help-card">
//         <div className="help-info">
//           <h2>{title}</h2>
//           <p>{description}</p>
//           <Link href="/" className="learn-mor-button">Learn More</Link>
//         </div>
//         <img src={imageSrc} alt={title}/>
//       </div>
//     </div>
//   )), [helpData])
//
//   return (
//     <div className="help-page-holder page">
//       <h2 className="page-title">Lives You Can Change</h2>
//       <div className="help-page">
//         {helpInfo}
//       </div>
//     </div>
//   );
// };
