"use client";

import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DevlogInteractivesApi } from "@/lib/api/interactive/devlogApi";
import { DevlogInteractives } from "@/types/api/devlog";

export default function InteractiveDevlog() {
  const [devlogs, setDevlogs] = useState<DevlogInteractives[]>([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DevlogInteractivesApi.getDevlogs();
        setDevlogs(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  // // Dummy data untuk sementara
  // const devlogs = [
  //   { id: 1, title: "GOD HELP US! — Codename for the Next Demo", date: "25 October 2025", image: "/assets/ld01.png" },
  //   { id: 2, title: "DEVLOG 16 OCT 2025 — Addressing Bugs", date: "16 October 2025", image: "/assets/ld02.png" },
  //   { id: 3, title: "We are participating STEAM NEXT FEST 2025!", date: "13 October 2025", image: "/assets/ld03.png" },
  //   { id: 4, title: "GOD HELP US! — Codename for the Next Demo", date: "25 October 2025", image: "/assets/ld01.png" },
  //   { id: 5, title: "DEVLOG 16 OCT 2025 — Addressing Bugs", date: "16 October 2025", image: "/assets/ld02.png" },
  //   { id: 6, title: "We are participating STEAM NEXT FEST 2025!", date: "13 October 2025", image: "/assets/ld03.png" },
  // ];

  // Custom Arrow
  function PrevArrow({ onClick }: { onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        aria-label="Previous"
        className="devlog-arrow devlog-prev"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          borderRadius: "4px",
          border: "2px solid rgba(255,255,255,0.9)",
          background: "rgba(0,0,0,0.6)",
        }}
      >
        <img src="/assets/al.png" alt="prev" style={{ width: 22, height: 22 }} />
      </button>
    );
  }

  function NextArrow({ onClick }: { onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        aria-label="Next"
        className="devlog-arrow devlog-next"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          borderRadius: "4px",
          border: "2px solid rgba(255,255,255,0.9)",
          background: "rgba(0,0,0,0.6)",
        }}
      >
        <img src="/assets/ar.png" alt="next" style={{ width: 22, height: 22 }} />
      </button>
    );
  }

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <div className="devlog-slider-wrapper w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">

      <style jsx global>{`
        .devlog-slider-wrapper {
          position: relative;
          padding-left: 80px;
          padding-right: 80px;
        }

        .devlog-slider-wrapper .slick-list {
          overflow: hidden !important;
        }

        .devlog-slider-wrapper .slick-track {
          display: flex;
          align-items: stretch;
        }

        .devlog-slider-wrapper .slick-slide > div {
          height: 100%;
        }

        .devlog-slider-wrapper .slick-prev:before,
        .devlog-slider-wrapper .slick-next:before {
          display: none !important;
        }

        .devlog-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 60;
        }

        .devlog-prev {
          left: -75px;
        }

        .devlog-next {
          right: -75px;
        }

        @media (max-width: 768px) {
          .devlog-slider-wrapper {
            padding-left: 48px;
            padding-right: 48px;
          }

          .devlog-prev {
            left: 8px;
          }

          .devlog-next {
            right: 8px;
          }
        }
      `}</style>

      <Slider {...sliderSettings}>
        {devlogs.map((item) => (
          <div key={item.id} className="px-4">
            <div className="w-full max-w-[384px] mx-auto h-full self-stretch">
              <div className="bg-zinc-600 rounded-lg overflow-hidden shadow-2xl flex flex-col h-full items-stretch">
                <div className="relative w-full h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between self-stretch">
                  <h3 className="text-white text-3xl md:text-4xl font-semibold font-['Playfair_Display'] leading-tight line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-xl font-normal font-['Poppins'] mt-4">
                    {item.date}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

