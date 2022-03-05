import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCartaPokemonComponent } from './lista-carta-pokemon.component';
import { ListaCartaPokemonRoutingModule } from "./lista-carta-pokemon-routing.module";
import { CarouselHolderModule } from "../../shared/components/carousel-holder/carousel-holder.module";



@NgModule({
  declarations: [
    ListaCartaPokemonComponent
  ],
    imports: [
        CommonModule,
        ListaCartaPokemonRoutingModule,
        CarouselHolderModule
    ]
})
export class ListaCartaPokemonModule { }
