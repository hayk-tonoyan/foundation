'use client';

import Link from "next/link";
import {useTranslations} from "next-intl";
import { useMemo } from "react";


import './index.css';
import useHelpData from "@/hooks/useHelpData";

export default function StoriesPage() {
  const t = useTranslations();
  const helpData = useHelpData();

  const helpInfo = useMemo(
    () =>
      helpData.map(({ title, description, imageSrc }) => (
        <div key={title}>
          <Link href={`/stories/${encodeURIComponent(title.replace(/ /g, '-'))}`}>
            <div className="help-card">
              <div className="help-info">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              {/*@ts-ignore*/}
              <img src={imageSrc} alt={title} />
            </div>
          </Link>
        </div>
      )),
    [helpData]
  );

  return (
    <div className="help-page-holder page">
      <h2 className="page-title">{t('stories')}</h2>
      <div className="help-page">{helpInfo}</div>
    </div>
  );
};
