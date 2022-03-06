import {Component, Input, OnInit} from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { Card } from "../../models/card.model";
import { Router } from "@angular/router";
import { Rotas } from "../../enums/rotas";

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ 'Prev', 'Next' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  @Input() cartas: Card[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detalharCarta(carta: Card) {
    this.router.navigate([Rotas.DETALHE_CARTA+`/${carta.id}`]);
  }

}
