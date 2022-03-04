import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseListCardsModel} from "../shared/models/response-list-cards.model";
import {ResponseCardModel} from "../shared/models/response-card.model";

@Injectable({
  providedIn: 'root'
})
export class CartaPokemonService {

  private X_API_KEY = 'X-Api-Key'
  private URL_CARDS = '/cards'

  constructor( private http: HttpClient) { }

  public getCards(): Observable<ResponseListCardsModel> {
    return this.http.get<ResponseListCardsModel>( this.getURLAPICard(),
      { headers: this.setHeaders() }
    );
  }

  public getCard(id: number): Observable<ResponseCardModel> {
    return this.http.get<ResponseCardModel>(`${this.getURLAPICard()}/${id}`,
      { headers: this.setHeaders() }
    );
  }

  private setHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers.append(this.X_API_KEY, environment.api_key);

    return headers;
  }

  private getURLAPICard() {
    return environment.url_base + this.URL_CARDS;
  }
}
