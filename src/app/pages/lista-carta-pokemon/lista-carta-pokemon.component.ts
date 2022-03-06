import { Component, OnInit } from '@angular/core';
import { CartaPokemonService } from "../../services/carta-pokemon.service";
import { QueryParams } from "../../shared/models/query-params.model";
import { Card } from "../../shared/models/card.model";
import { MediaQueryService } from "../../services/media-query.service";
import { Rotas } from "../../shared/enums/rotas";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-lista-carta-pokemon',
  templateUrl: './lista-carta-pokemon.component.html',
  styleUrls: ['./lista-carta-pokemon.component.scss']
})
export class ListaCartaPokemonComponent implements OnInit {

  queryParams = new QueryParams();

  nomeFiltro: string;

  cartas: Card[];

  carregando: boolean;

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
    this.carregando = true;
    this.cartaPokemonService.getCards(this.queryParams).pipe(take(1)).subscribe( res => {
      this.cartas = res.data;
    }, () => {

    }, () => {
      this.carregando = false
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
