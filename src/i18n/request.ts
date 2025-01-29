import deepmerge from 'deepmerge';
import { notFound } from 'next/navigation';
import { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { DEFAULT_LANG } from '../common/constants/constants';
import { LangMappingEnum } from '../common/enums';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!Object.values(LangMappingEnum).includes(locale as LangMappingEnum)) {
    return notFound();
  }

  const currentLocale = (await import(`../locales/${locale}.json`)).default;

  const defaultLocale = (await import(`../locales/${DEFAULT_LANG}.json`))
    .default;

  const deepCopyLocales: AbstractIntlMessages = deepmerge(
    defaultLocale,
    currentLocale
  );

  return {
    messages: deepCopyLocales,
  };
});
