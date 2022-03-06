import { Ability } from "./ability.model";
import { Attack } from "./attack.model";
import { TypeValue } from "./weakness.model";
import { Legalities } from "./legalities";
import { Images } from "./images";
import { SetModel } from "./set.model";
import { Tcgplayer } from "./tcgplayer.model";
import { Cardmarket } from "./cardmarket.model";


export interface Card {
  id?: string;
  name?: string;
  supertype?: string;
  subtypes?: string[];
  level?: string;
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: TypeValue[];
  retreatCost?: string[];
  resistances?: TypeValue[];
  convertedRetreatCost?: number;
  set?: SetModel;
  number?: string;
  artist?: string;
  rarity?: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities?: Legalities;
  images?: Images;
  tcgplayer?: Tcgplayer;
  cardmarket?: Cardmarket;
}


