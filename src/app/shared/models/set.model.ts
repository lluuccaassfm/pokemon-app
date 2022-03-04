import { Legalities } from "./legalities";
import { Images } from "./images";

export interface SetModel {
  id?: string;
  name?: string;
  series?: string;
  printedTotal?: number;
  total?: number;
  legalities?: Legalities;
  ptcgoCode?: string;
  releaseDate?: string;
  updatedAt?: string;
  images?: Images;
}
