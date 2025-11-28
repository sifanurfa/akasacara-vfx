import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import "./FilmHome.css"

type PressCardProps = {
  id: number;
  title: string;
  announceType: string;
  image: string;
  urlMedia: string;
  date: string;
};

function PressCard({ id, title, announceType, image, date, urlMedia }: PressCardProps) {
  return (
    <Link href={urlMedia || "google.com"} target="_blank" rel="noopener noreferrer" className="flex flex-col items-start group cursor-pointer">
        <div className="flex-1 w-full relative aspect-video overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="flex flex-col pt-m pb-l pe-4 items-center gap-m self-stretch">
            <div className="self-stretch">
                <span className="press-category aka-text-title">{announceType}</span>
                <span className="aka-text-subtitle-1 body-reg"> / {date}</span>
            </div>
            <div className="self-stretch">
                <div className="garis h-px"></div>
            </div>
            <div className="press-title aka-text-title self-stretch">{title}</div>
        </div>
    </Link>
  )
}

export default PressCard