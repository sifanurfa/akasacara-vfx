import React from 'react'
import Image from 'next/image';

type AnnouncementCardProps = {
  id: number;
  title: string;
  content: string;
  image: string;
};

function BreakdownCard({ id, title, content, image }: AnnouncementCardProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-m flex-1">
        <div className="flex-1 w-full relative aspect-[16/9] group">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-14 h-14 drop-shadow-lg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653v12.694a.75.75 0 001.133.65l10.818-6.347a.75.75 0 000-1.3L6.383 5.003a.75.75 0 00-1.133.65z"
                />
                </svg>
            </div>
        </div>
        <div className="flex flex-col items-start gap-md self-stretch">
            <div className="self-stretch headline-2 vfx-text-title">{title}</div>
            <div className="self-stretch sub-heading-reg vfx-text-subtitle-2">{content}</div>
        </div>
    </div>
  )
}

export default BreakdownCard