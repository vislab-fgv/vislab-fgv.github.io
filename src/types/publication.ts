import type { Person } from "./people";
import type { Venue } from "./venue";

export interface Publication {
  id: number;
  title: string;
  venue_id: number;
  venue: string;
  web_name: string;
  year: number;
  bibtext: string | null;
  pdf: string;
  thumbnail: string;
  figure: string;
  caption: string | null;
  start_page: number | null;
  end_page: number | null;
  volume: number | null;
  issue: number | null;
  editors: number;
  publisher: number;
  location: number;
  abstract: string;
  visible: number;
  mod_date: string;
  note: string | null;
  pub_date: string;
  url: string | null;

  authors: number[];
}

export interface Material {
  id: number;
  pub_id: number;
  name: string;
  material: string | null;
  link: string | null;
}

export type ExtendedPublication = Omit<Publication, "authors" | "venue"> & {
  authors?: Person[];
  venue?: Venue | null;
  materials?: Material[];
};
