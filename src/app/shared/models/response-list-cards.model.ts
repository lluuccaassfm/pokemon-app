import { Card } from "./card.model";

export interface ResponseListCardsModel {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
