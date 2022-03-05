import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselHolderComponent } from './carousel-holder.component';
import { CarouselModule } from "ngx-owl-carousel-o";



@NgModule({
  declarations: [
    CarouselHolderComponent
  ],
  exports: [
    CarouselHolderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class CarouselHolderModule { }
