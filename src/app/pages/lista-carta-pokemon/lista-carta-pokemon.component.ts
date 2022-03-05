import { Component, OnInit } from '@angular/core';
import {CartaPokemonService} from "../../services/carta-pokemon.service";
import { QueryParams } from "../../shared/models/query-params.model";
import { Card } from "../../shared/models/card.model";

@Component({
  selector: 'app-lista-carta-pokemon',
  templateUrl: './lista-carta-pokemon.component.html',
  styleUrls: ['./lista-carta-pokemon.component.scss']
})
export class ListaCartaPokemonComponent implements OnInit {

  queryParams = new QueryParams();

  cartas: Card[];

  constructor(
    private cartaPokemonService: CartaPokemonService
  ) { }

  ngOnInit(): void {
    this.cartaPokemonService.getCards(this.queryParams).subscribe( res => {
      console.log(res)
      this.cartas = res.data;
    })
  }

}
