import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheCartaPokemonComponent } from './detalhe-carta-pokemon.component';
import { DetalheCartaPokemonRoutingModule } from "./detalhe-carta-pokemon-routing.module";
import { ExtendedModule, FlexModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";



@NgModule({
  declarations: [
    DetalheCartaPokemonComponent
  ],
  imports: [
    CommonModule,
    DetalheCartaPokemonRoutingModule,
    FlexModule,
    ExtendedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class DetalheCartaPokemonModule { }
