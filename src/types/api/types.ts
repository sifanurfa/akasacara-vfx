export interface MediaFormat {
  url: string;
  width: number;
  height: number;
};

export interface Media {
  id: number;
  url: string;
  formats?: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
};

export interface InteractiveGame {
  id: number;
  title: string;
  description: string;
  trailer?: string | null;
  link?: string | null;
  rate: number;
  progres: string;
  media: Media[];
};

export interface AnnouncementFilm {
  id: number;
  identifier: string;
  urlMedia: string;
  title: string;
  announceType: string;
  item: string;
  date: string;
  media: Media[];
};
