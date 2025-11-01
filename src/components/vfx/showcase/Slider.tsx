"use client";

import React from "react";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        right: "475px",
        zIndex: 2,
      }}
    />
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        left: "475px",
        zIndex: 2,
      }}
    />
  );
}

export default function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  const images = [
    "/assets/about.jpg",
    "/assets/gowok.png",
    "/assets/gowok2.png",
    "/assets/about.jpg",
    "/assets/gowok.png",
  ];

  return (
    <div className="slider-container w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="px-xl">
            <div className="relative w-full overflow-hidden aspect-[3/2]">
              <Image
                src={src}
                alt={`image-${idx}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
                // sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
