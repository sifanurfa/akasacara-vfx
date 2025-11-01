"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Showcase.module.css";

const slides = [
    { src: "/assets/darah_nyai.png", title: "Darah Nyai" },
    { src: "/assets/gowok.png", title: "Gowok" },
    { src: "/assets/serigala_langit.png", title: "Serigala Langit" },
    { src: "/assets/gowok2.png", title: "Setan Alas" },
];

export default function VerticalThumbSlider() {
  const mainSlider = useRef<Slider | null>(null);
  const thumbSlider = useRef<Slider | null>(null);

  const mainSettings = {
    asNavFor: thumbSlider.current as Slider | undefined,
    arrows: false,
    fade: true,
    infinite: true,
  };

  const thumbSettings = {
    asNavFor: mainSlider.current as Slider | undefined,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    className: "thumb-slider",
  };

  return (
    <div className="flex py-section px-container items-start gap-xl self-stretch">
      {/* MAIN SLIDER */}
      <div className="flex-5 w-full overflow-hidden">
        <Slider ref={mainSlider} {...mainSettings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="flex flex-1 flex-col items-start self-stretch">
              <Image
                src={slide.src}
                alt={slide.title}
                width={780}
                height={520}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "441/248" }}
              />
              <div className="flex justify-between items-start mt-m self-stretch">
                <div className="flex flex-col items-start gap-[12px]">
                    <div className="self-stretch vfx-text-title headline-3">{slide.title}</div>
                    <div className="self-stretch vfx-text-subtitle-1 body-reg">{slide.title}</div>
                </div>
                <p className="vfx-text-title button-secondary pe-1">WATCH HERE</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* THUMBNAIL SLIDER */}
      <div className="flex-1 items-center gap-[16px]">
        <Slider ref={thumbSlider} {...thumbSettings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="relative py-[10px]">
              <div className="flex flex-col justify-center items-end self-stretch">
                <Image
                    src={slide.src}
                    alt={slide.title}
                    width={240}
                    height={135}
                    className="object-cover cursor-pointer"
                    style={{ aspectRatio: "16/9" }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0"></div>
                <div className="absolute flex  px-m flex-col items-center gap-s">
                  <div className={`flex self-stretch vfx-text-title ${styles.breakdown_series_title}`}>{slide.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
