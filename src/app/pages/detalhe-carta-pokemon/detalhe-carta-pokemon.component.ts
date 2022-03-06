import {Component, OnDestroy, OnInit} from '@angular/core';
import { Card } from "../../shared/models/card.model";
import {ActivatedRoute} from "@angular/router";
import {CartaPokemonService} from "../../services/carta-pokemon.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detalhe-carta-pokemon',
  templateUrl: './detalhe-carta-pokemon.component.html',
  styleUrls: ['./detalhe-carta-pokemon.component.scss']
})
export class DetalheCartaPokemonComponent implements OnInit, OnDestroy {

  // card: Card = {id:"pl3-1", name:"Absol G",supertype:"Pokémon",subtypes:["Basic"],level:"59",hp:"70",types:["Darkness"],attacks:[{name:"Feint Attack",cost:["Darkness"],convertedEnergyCost:1,damage:"",text:"Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."},{name:"Doom News",cost:["Darkness","Colorless","Colorless"],convertedEnergyCost:3,damage:"",text:"Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn."}],weaknesses:[{type:"Fighting",value:"×2"}], resistances:[{type:"Psychic",value:"-20"}] ,retreatCost:["Colorless"],convertedRetreatCost:1,set:{id:"pl3",name:"Supreme Victors",series:"Platinum",printedTotal:147,total:153,legalities:{unlimited:"Legal"},ptcgoCode:"SV",releaseDate:"2009/08/19",updatedAt:"2018/03/07 22:40:00",images:{symbol:"https://images.pokemontcg.io/pl3/symbol.png",logo:"https://images.pokemontcg.io/pl3/logo.png"}},number:"1",artist:"Yusuke Ishikawa",rarity:"Rare Holo",nationalPokedexNumbers:[359],legalities:{unlimited:"Legal"},images:{small:"https://images.pokemontcg.io/pl3/1.png",large:"https://images.pokemontcg.io/pl3/1_hires.png"},tcgplayer:{url:"https://prices.pokemontcg.io/tcgplayer/pl3-1",updatedAt:"2022/03/05",prices:{ holofoil:{low:3.98,mid:4.94,high:7.0,market:5.46}, reverseHolofoil:{low:1.99,mid:2.84,high:4.98,market:4.92}}},cardmarket:{url:"https://prices.pokemontcg.io/cardmarket/pl3-1",updatedAt:"2022/03/05",prices:{averageSellPrice:2.5,lowPrice:0.99,trendPrice:4.52,reverseHoloSell:2.0,reverseHoloLow:1.49,reverseHoloTrend:2.41,lowPriceExPlus:2.0,avg1:2.5,avg7:3.46,avg30:4.18,reverseHoloAvg1:2.0,reverseHoloAvg7:2.53,reverseHoloAvg30:2.46}}}

  card: Card;

  idCard: string;

  subs: Subscription[];

  constructor(
    private route: ActivatedRoute,
    private cartaPokemonService: CartaPokemonService
  ) {
      route.queryParams.subscribe( params => {
        this.idCard = params['id'];
      })

  }

  ngOnInit(): void {
    this.cartaPokemonService.getCard(this.idCard).subscribe( res => {
      this.card = res.data;
    })
  }

  ngOnDestroy() {
    this.subs.map(sub => sub.unsubscribe());
  }

}
