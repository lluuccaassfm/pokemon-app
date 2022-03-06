export interface QueryParamsModel {
  page: number;
  pageSize: number;
  orderBy: string;
  name: string;
}

export class QueryParams implements QueryParamsModel{
  page = 1;
  pageSize = 20;
  orderBy = 'name';
  name: string;
}
