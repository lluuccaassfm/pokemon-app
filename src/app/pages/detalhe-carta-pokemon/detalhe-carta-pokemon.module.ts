import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheCartaPokemonComponent } from './detalhe-carta-pokemon.component';
import { DetalheCartaPokemonRoutingModule } from "./detalhe-carta-pokemon-routing.module";



@NgModule({
  declarations: [
    DetalheCartaPokemonComponent
  ],
  imports: [
    CommonModule,
    DetalheCartaPokemonRoutingModule
  ]
})
export class DetalheCartaPokemonModule { }
