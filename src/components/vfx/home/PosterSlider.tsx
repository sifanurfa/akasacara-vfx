"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Poster.module.css";

const slides = [
  { src: "/assets/darah_nyai.png", title: "Darah Nyai" },
  { src: "/assets/gowok.png", title: "Gowok" },
  { src: "/assets/serigala_langit.png", title: "Serigala Langit" },
  { src: "/assets/gowok2.png", title: "Setan Alas" },
  { src: "/assets/darah_nyai.png", title: "Darah Nyai" },
  { src: "/assets/gowok.png", title: "Gowok" },
  { src: "/assets/serigala_langit.png", title: "Serigala Langit" },
  { src: "/assets/gowok2.png", title: "Setan Alas" },
];

export default function PosterSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="slider-container w-full overflow-hidden gap-xl">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className={styles.posterWrapper}>
            <div className={styles.posterImage}>
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className={styles.posterTitle}>{slide.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
