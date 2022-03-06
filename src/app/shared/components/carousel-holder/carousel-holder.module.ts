import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselHolderComponent } from './carousel-holder.component';
import { CarouselModule } from "ngx-owl-carousel-o";
import { CardPokemonModule } from "../card-pokemon/card-pokemon.module";
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    CarouselHolderComponent
  ],
  exports: [
    CarouselHolderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardPokemonModule,
    MatCardModule,
  ]
})
export class CarouselHolderModule { }
