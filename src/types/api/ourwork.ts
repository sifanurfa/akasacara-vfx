// types/api/devlog.ts
export interface OurWorkMediaFormat {
  url: string;
  width: number;
  height: number;
}

export interface OurWorkMedia {
  id: number;
  url: string;
  formats?: {
    thumbnail?: OurWorkMediaFormat;
    small?: OurWorkMediaFormat;
    medium?: OurWorkMediaFormat;
    large?: OurWorkMediaFormat;
  };
}

export interface OurWorkVFX {
  id: number;
  documentId: string;
  title: string;
  year: string;
  image: string;
  media?: Media[];
}

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
