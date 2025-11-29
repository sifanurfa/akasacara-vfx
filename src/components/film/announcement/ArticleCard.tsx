import React from 'react'
import Image from 'next/image'

type ArticleCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export function ArticleCard({ id, title, date, image }: ArticleCardProps) {
  return (
    <div className="flex flex-1 justify-center items-center gap-m cursor-pointer">
      <div className="flex-1 relative aspect-video">
          <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
          />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-s">
        <h3 className="heading-article-card aka-text-subtitle-1 self-stretch">{title}</h3>
        <span className="caption-reg font-medium aka-text-subtitle-2 self-stretch">{date}</span>
      </div>
    </div>
  )
}

export default ArticleCard