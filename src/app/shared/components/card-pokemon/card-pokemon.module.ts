import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon.component';



@NgModule({
  declarations: [
    CardPokemonComponent
  ],
  exports: [
    CardPokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardPokemonModule { }
