export type Paper = {
  id: number;
  title: string;
  venue: string;
  web_name: string;
  year: number;
  authors: number[];
  abstract: string;
  url: string;
  pub_date: string;
  pdf?: string;
  links?: {
    name: string;
    file?: string;
    link?: string;
  }[];
  thumbnail?: string;
  figure?: string;
  caption?: string;
};

export type Publication = {
  conference: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  links: string[];
  thumbnail?: string;
}