import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselHolderComponent } from './carousel-holder.component';
import { CarouselModule } from "ngx-owl-carousel-o";
import {CardModule} from "../card/card.module";
import {MatCardModule} from "@angular/material/card";



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
    CardModule,
    MatCardModule
  ]
})
export class CarouselHolderModule { }
