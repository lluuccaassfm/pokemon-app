import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAtaquesPokemonComponent } from './dialog-ataques-pokemon.component';
import { MatDialogModule } from "@angular/material/dialog";



@NgModule({
  declarations: [
    DialogAtaquesPokemonComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DialogAtaquesPokemonModule { }
