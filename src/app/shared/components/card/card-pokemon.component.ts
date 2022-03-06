import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  subTitle: string;

  @Input()
  imageUrl: string

  @Input()
  types: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
