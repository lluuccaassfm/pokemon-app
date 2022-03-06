import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Attack } from "../../models/attack.model";

@Component({
  selector: 'app-dialog-ataques-pokemon',
  templateUrl: './dialog-ataques-pokemon.component.html',
  styleUrls: ['./dialog-ataques-pokemon.component.scss']
})
export class DialogAtaquesPokemonComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAtaquesPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public attack: Attack
  ) {  }

}
