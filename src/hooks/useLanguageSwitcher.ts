import { useRouter } from 'next/navigation';

export const useLanguageSwitcher = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  return { switchLanguage };
};
