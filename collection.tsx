export interface Album {
  artists: Artist[];
  images: TrackImages;
  key: string;
  layout: string;
  subtitle: string;
  title: string;
  share: Share;
  url: string;
}
export interface Artist {
  adamid: string;
  id: string;
}
export interface TrackImages {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}
export interface Share {
  avatar?: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}
export interface MusicListType {
  layout: string;
  subtitle: string;
  title: string;
}
