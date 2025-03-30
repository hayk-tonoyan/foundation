'use client';

import Link from "next/link";
import {useTranslations} from "next-intl";
import { useMemo } from "react";
import SliderComponent, { Settings } from "react-slick";

import useHelpData from "@/hooks/useHelpData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

// @ts-ignore
const Slider = SliderComponent as unknown as React.ComponentType<>;

function SwipeToSlide() {
  const t = useTranslations();
  const helpData = useHelpData();

  const settings: Settings = {
    fade: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    className: "center",
    autoplaySpeed: 5000,
  };

  const slides = useMemo(() => helpData.map(({ title, description, imageSrc }) => (
    <div className="slide-item" key={title}>
      <div className="slide-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href="/" className="learn-mor-button">{t('learnMore')}</Link>
      </div>
      {/*@ts-ignore*/}
      <img src={imageSrc} alt={title} />
    </div>
  )), [helpData]);

  return (
    <div className="slider-container">
      {/*@ts-ignore*/}
      <Slider {...settings}>
        {slides}
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
