import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCartaPokemonComponent } from './lista-carta-pokemon.component';
import { ListaCartaPokemonRoutingModule } from "./lista-carta-pokemon-routing.module";



@NgModule({
  declarations: [
    ListaCartaPokemonComponent
  ],
  imports: [
    CommonModule,
    ListaCartaPokemonRoutingModule
  ]
})
export class ListaCartaPokemonModule { }
