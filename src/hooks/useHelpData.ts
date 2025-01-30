import {StaticImageData} from "next/image";
import {useTranslations} from "next-intl";

import slide1 from '@/assets/slides/1.jpg';
import slide2 from '@/assets/slides/2.jpeg';
import slide3 from '@/assets/slides/3.jpeg';

const SLIDER_ITEM_IMAGES: StaticImageData[] = [
  // @ts-ignore
  slide1.src,
  // @ts-ignore
  slide2.src,
  // @ts-ignore
  slide3.src,
];

export default function useHelpData() {
  const t = useTranslations();

  return SLIDER_ITEM_IMAGES.map((imageSrc, i) => ({
    imageSrc,
    title: t(`sliders.${i+1}.title`),
    description: t(`sliders.${i+1}.description`),
  }));
};
