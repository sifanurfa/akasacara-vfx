"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Announcement.css"

type HighlightItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
};

const HighlightSection = () => {
  const [mainHighlight, setMainHighlight] = useState({
    id: 0,
    title: "Menyakiti Laut dan Saatnya Penghakiman",
    category: "Press",
    date: "Oct 25, 2025",
    image: "/assets/hlmain.png",
  });

  const [subHighlights, setSubHighlights] = useState([
    {
      id: 1,
      title: "Karya Kolaboratif Sekolah Vokasi UGM Setan Alas",
      category: "Announcement",
      date: "July 21, 2025",
      image: "/assets/hl01.png",
    },
    {
      id: 2,
      title: "Menyakiti Laut dan Saatnya Penghakiman",
      category: "Article",
      date: "July 21, 2025",
      image: "/assets/hl02.png",
    },
    {
      id: 3,
      title: "Film “Setan Alas” Berhasil Menangi Kompetisi",
      category: "Press",
      date: "July 21, 2025",
      image: "/assets/hl03.png",
    },
  ]);

  // fungsi untuk menukar gambar utama dengan gambar kecil yang diklik
  const handleSwap = (item: HighlightItem) => {
    const newSubs = subHighlights.map((sub) =>
      sub.id === item.id ? mainHighlight : sub
    );
    setSubHighlights(newSubs);
    setMainHighlight(item);
  };

  return (
    <div className="self-stretch px-container py-section flex flex-col items-start gap-xl">
      <div className="self-stretch text-akasacara-yellow headline-1">
        HIGHLIGHT
      </div>

      <div className="self-stretch flex items-start gap-l">
        {/* MAIN IMAGE */}
        <div className="flex-1 self-stretch flex flex-col items-start gap-m">
          <img
            src={mainHighlight.image}
            alt={mainHighlight.title}
            className="self-stretch h-[456px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          />
          <div className="self-stretch pb-md px-md flex flex-col items-start gap-m">
            <div className="self-stretch">
              <span className="press-category vfx-text-title">{mainHighlight.category}</span>
              <span className="body-reg vfx-text-subtitle-1"> / {mainHighlight.date}</span>
            </div>
            <div className="self-stretch flex justify-end items-start gap-m">
              <div className="headline-3 vfx-text-title">{mainHighlight.title}</div>
            </div>
          </div>
        </div>

        {/* SUB IMAGES */}
        <div className="flex-1 self-stretch flex flex-col items-start gap-md">
          {subHighlights.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSwap(item)}
              className="group self-stretch pl-m hover:p-md flex justify-end items-center gap-2xl cursor-pointer hover:bg-akasacara-yellow transition-all duration-200"
            >
              <div className="flex-1 flex flex-col items-start gap-m">
                <div className="self-stretch caption-reg">
                  <span className="side-category group-hover:text-black/20">{item.category}</span>
                  <span className="side-date group-hover:text-black/20"> / {item.date}</span>
                </div>
                <div className="self-stretch text-white side-highlight-title group-hover:text-black">{item.title}</div>
              </div>
              <div className="flex-1 relative overflow-hidden self-stretch px-md flex flex-col justify-center items-start gap-2.5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="self-stretch object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
