"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WatchTrailerBtn from "@/components/interactive/collection/WatchTrailerBtn";
import PlayNowBtn from "@/components/interactive/collection/PlayNowBtn";
import "./InteractiveCollection.css";
import { CustomArrowProps } from "react-slick";

const slides = [
  { src: "/assets/game.png", title: "game" },
  { src: "/assets/game1.png", title: "game" },
  { src: "/assets/game2.png", title: "game" },
  { src: "/assets/game3.png", title: "game" },
  { src: "/assets/game.png", title: "game" },
  { src: "/assets/game1.png", title: "game" },
  { src: "/assets/game2.png", title: "game" },
  { src: "/assets/game3.png", title: "game" },
];

export default function PopularGame() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const NextArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="46" viewBox="0 0 25 46" fill="none">
          <path d="M2 2L22 23L2 44" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="46" viewBox="0 0 25 46" fill="none">
          <path d="M22.7617 2L2.76172 23L22.7617 44" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    );
  };

  const thumbSettings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col relative pb-section items-center gap-[-40px] self-stretch">
      <div className="flex relative w-full aspect-video overflow-hidden flex-col items-center gap-2.5 self-stretch">
        <Image
          src={slides[currentIndex].src}
          alt={slides[currentIndex].title}
          fill
          className="object-cover transition-all duration-500"
        />

        <div className="absolute inset-y-0 h-screen left-0 w-2/3 px-[89px] z-10 flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col justify-center items-start gap-md self-stretch">
            <div className="flex flex-col items-start self-stretch">
              <div className="flex items-center gap-s">
                {["Adventure", "Action", "Casual", "3D"].map((cat, i) => (
                  <div
                    key={i}
                    className="flex p-xs justify-center items-center gap-2.5"
                  >
                    <div className="kategori">{cat}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch">
              <div className="headline-1 vfx-text-title self-stretch">
                Ganyang Setan Alas! The Game
              </div>
            </div>

            <div className="sub-heading-reg vfx-text-subtitle-1 self-stretch">
              Ganyang Setan Alas! The Game is a single-player shooter set in a
              haunted Indonesian forest, where four students must survive
              relentless zombie attacks and escape a cursed fate.
            </div>
          </div>

          <div className="flex h-[68px] items-center gap-m">
            <PlayNowBtn />
            <WatchTrailerBtn />
          </div>
        </div>
      </div>

      <div className="thumbnail-slider-container">
        <Slider {...thumbSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2 gap-m">
              <button
                onClick={() => setCurrentIndex(index)}
                className={`relative w-full aspect-39/22 overflow-hidden transition-all duration-300`}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
