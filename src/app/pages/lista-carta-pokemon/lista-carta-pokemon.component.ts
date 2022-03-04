import { Component, OnInit } from '@angular/core';
import {CartaPokemonService} from "../../services/carta-pokemon.service";

@Component({
  selector: 'app-lista-carta-pokemon',
  templateUrl: './lista-carta-pokemon.component.html',
  styleUrls: ['./lista-carta-pokemon.component.scss']
})
export class ListaCartaPokemonComponent implements OnInit {

  constructor(
    private cartaPokemonService: CartaPokemonService
  ) { }

  ngOnInit(): void {
    this.cartaPokemonService.getCards().subscribe( res => {
      console.log(res)
    })
  }

}
