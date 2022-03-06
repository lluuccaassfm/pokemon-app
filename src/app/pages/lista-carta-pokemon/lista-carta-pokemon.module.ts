import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCartaPokemonComponent } from './lista-carta-pokemon.component';
import { ListaCartaPokemonRoutingModule } from "./lista-carta-pokemon-routing.module";
import { CarouselHolderModule } from "../../shared/components/carousel-holder/carousel-holder.module";
import { MatCardModule } from "@angular/material/card";
import { CardPokemonModule } from "../../shared/components/card-pokemon/card-pokemon.module";
import { FlexModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    ListaCartaPokemonComponent
  ],
  imports: [
    CommonModule,
    ListaCartaPokemonRoutingModule,
    CarouselHolderModule,
    MatCardModule,
    CardPokemonModule,
    FlexModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ListaCartaPokemonModule { }
