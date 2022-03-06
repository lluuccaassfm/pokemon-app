import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseListCardsModel } from "../shared/models/response-list-cards.model";
import { ResponseCardModel } from "../shared/models/response-card.model";
import { QueryParamsModel } from "../shared/models/query-params.model";

@Injectable({
  providedIn: 'root'
})
export class CartaPokemonService {

  private URL_CARDS = '/cards'

  constructor( private http: HttpClient) { }

  public getCards(params: QueryParamsModel): Observable<ResponseListCardsModel> {
    return this.http.get<ResponseListCardsModel>( this.getURLAPICard(), {
      params: this.setParams(params)
    });
  }

  public getCard(id: string): Observable<ResponseCardModel> {
    return this.http.get<ResponseCardModel>(`${this.getURLAPICard()}/${id}`);
  }

  private setParams(params: QueryParamsModel): HttpParams {
    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({
      orderBy: params.orderBy,
      page: params.page,
      pageSize: params.pageSize
    });

    if(params.name) {
      queryParams = queryParams.append('q', `name:${params.name}*`);
    }

    return queryParams;
  }

  private getURLAPICard() {
    return environment.url_base + this.URL_CARDS;
  }
}
