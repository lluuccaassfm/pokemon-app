import { Component, OnInit } from '@angular/core';
import { CartaPokemonService } from "../../services/carta-pokemon.service";
import { QueryParams } from "../../shared/models/query-params.model";
import { Card } from "../../shared/models/card.model";
import { MediaQueryService } from "../../services/media-query.service";
import { Rotas } from "../../shared/enums/rotas";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-carta-pokemon',
  templateUrl: './lista-carta-pokemon.component.html',
  styleUrls: ['./lista-carta-pokemon.component.scss']
})
export class ListaCartaPokemonComponent implements OnInit {

  queryParams = new QueryParams();

  nomeFiltro: string;

  cartas: Card[];

  constructor(
    private cartaPokemonService: CartaPokemonService,
    public device: MediaQueryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscarCartas();
  }

  filtrarCartas() {
    this.queryParams.name = this.nomeFiltro ?? null;
    this.buscarCartas();
  }

  buscarCartas() {
    this.cartaPokemonService.getCards(this.queryParams).subscribe( res => {
      this.cartas = res.data;
    })
  }

  detalharCarta(carta: Card) {
    this.router.navigate([Rotas.DETALHE_CARTA], {
      queryParams: {
        id: carta.id
      }
    });
  }

}
