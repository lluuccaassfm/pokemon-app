import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  imageUrl: string;

  @Input()
  types: string[];

  @Output()
  exibirDetalhesEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  exibirDetalhes() {
    this.exibirDetalhesEvent.emit();
  }
}
