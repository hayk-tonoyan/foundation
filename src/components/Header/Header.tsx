import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import React from 'react';

import BurgerMenu from "@/components/BurgerMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import LogoHolder from './LogoHolder';
import { StyledHeader } from './style';

import './index.css';

export default async function Header() {
  const t = await getTranslations();

  return (
    <StyledHeader>
      <LogoHolder />
      <div className="nav">
        <BurgerMenu>
          <Link href="/">
            {t('home')}
          </Link>
          <Link href="/stories">
            {t('stories')}
          </Link>
          <Link href="/about">
            {t('aboutUs')}
          </Link>
          <Link href="/team">
            {t('team')}
          </Link>
          <Link href="/anbi">
            ANBI
          </Link>
        </BurgerMenu>
        <div>
          <LanguageSwitcher />
        </div>
        <Link className="donate-button" href="/donate">
          {t('donate')}
        </Link>
      </div>
    </StyledHeader>
  );
}
