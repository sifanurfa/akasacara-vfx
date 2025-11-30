"use client";
// PortofolioSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Poster.module.css';

const posters = [
  { id: 1, src: "/assets/gowok.png", title: "Gowok", highlightedTitle: "Gowok 2025" },
  { id: 2, src: "/assets/darah_nyai.png", title: "Darah Nyai", highlightedTitle: "Darah Nyai" },
  { id: 3, src: "/assets/setan_alas.png", title: "Setan Alas!", highlightedTitle: "Setan Alas!" },
  { id: 4, src: "/assets/serigala_langit.png", title: "Serigala Langit", highlightedTitle: "Serigala Langit" },
  { id: 5, src: "/assets/gowok2.png", title: "Setan Alas", highlightedTitle: "Setan Alas" },
  { id: 6, src: "/assets/darah_nyai.png", title: "Darah Nyai", highlightedTitle: "Darah Nyai"},
];

export default function PortofolioSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Mulai dari Darah Nyai (sesuai Figma)

  const handleClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  // Urutan tampilan: kiri → aktif → kanan 1 → kanan 2 (setengah keluar)
  const getOrderedPosters = () => {
    const len = posters.length;
    const ordered = [];

    // Kiri
    ordered.push(posters[(activeIndex - 1 + len) % len]);
    // Tengah (aktif)
    ordered.push(posters[activeIndex]);
    // Kanan 1
    ordered.push(posters[(activeIndex + 1 + len) % len]);
    // Kanan 2 (setengah keluar)
    ordered.push(posters[(activeIndex + 2 + len) % len]);

    return ordered;
  };

  const ordered = getOrderedPosters();

  return (
    <div className="flex flex-col py-section px-container items-start gap-m self-stretch">
      {/* Header */}
      <div className="flex justify-between items-end self-stretch">
        <div className="headline-1 vfx-text-title">OUR WORKS</div>
        <div className="flex items-center gap-4 cursor-pointer">
          <span className="button-main text-center vfx-text-title">SEE ALL</span>
          <span className="see-all vfx-text-title">&gt;</span>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div className="flex items-center justify-start h-[620px] md:h-[720px] lg:h-[780px] gap-8 md:gap-12 lg:gap-16">
          {/* Poster Kiri */}
          <div className="flex flex-col items-start gap-4 flex-shrink-0">
            <div className={styles.posterWrapper} onClick={() => handleClick((activeIndex - 1 + posters.length) % posters.length)}>
              <Image src={ordered[0].src} alt={ordered[0].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="vfx-text-title sub-heading-light">{ordered[0].title}</div>
          </div>

          {/* Poster AKTIF (Tengah) */}
          <div className="flex flex-col items-center gap-6 flex-shrink-0 z-10">
            <div className={styles.highlightedPoster} onClick={() => handleClick(activeIndex)}>
              <Image src={ordered[1].src} alt={ordered[1].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="headline-3 text-white text-center">
              {ordered[1].highlightedTitle || ordered[1].title}
            </div>
          </div>

          {/* Poster Kanan 1 */}
          <div className="flex flex-col items-start gap-4 flex-shrink-0">
            <div className={styles.posterWrapper} onClick={() => handleClick((activeIndex + 1 + posters.length) % posters.length)}>
              <Image src={ordered[2].src} alt={ordered[2].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="vfx-text-title sub-heading-light">{ordered[2].title}</div>
          </div>

          {/* Poster Paling Kanan (setengah keluar) */}
          <div className="flex flex-col items-start gap-4 flex-shrink-0">
            <div className={styles.posterWrapper} onClick={() => handleClick((activeIndex + 2 + posters.length) % posters.length)}>
              <Image src={ordered[3].src} alt={ordered[3].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="vfx-text-title sub-heading-light">{ordered[3].title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from 'react'
// import Image from 'next/image'
// import styles from "./Poster.module.css";

// export default function PortofolioSection() {
//     return (
//         <div className="flex flex-col py-section px-container items-start gap-3xl self-stretch">
//             <div className="flex justify-between items-end self-stretch">
//                 <div className="headline-1 vfx-text-title">OUR  WORKS</div>
//                 <div className="flex justify-center items-end gap-m">
//                     <span className="button-main text-center vfx-text-title">SEE ALL</span>
//                     <span className="see-all vfx-text-title">&gt;</span>
//                 </div>
//             </div>
//             <div className="flex justify-center items-center gap-xl">
//                  <div className="flex flex-col items-start gap-md">
//                     <div className={styles.posterWrapper}>
//                         <Image
//                             src="/assets/darah_nyai.png"
//                             alt="Darah Nyai"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     <div className="self-stretch vfx-text-title sub-heading-light">Darah Nyai</div>
//                 </div>
//                 <div className="flex flex-col items-start gap-l">
//                     <div className={styles.highlightedPoster}>
//                         <Image
//                             src="/assets/gowok.png"
//                             alt="Gowok 2025"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     <span className="headline-3 text-white">Gowok 2025</span>
//                 </div>
//                 <div className="flex flex-col items-start gap-md">
//                     <div className={styles.posterWrapper}>
//                         <Image
//                             src="/assets/darah_nyai.png"
//                             alt="Darah Nyai"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     <div className="self-stretch vfx-text-title sub-heading-light">Darah Nyai</div>
//                 </div>
//                  <div className="flex flex-col items-start gap-md">
//                     <div className={styles.posterWrapper}>
//                         <Image
//                             src="/assets/darah_nyai.png"
//                             alt="Darah Nyai"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     <div className="self-stretch vfx-text-title sub-heading-light">Darah Nyai</div>
//                 </div>
//             </div>
//         </div>
//     )
// }