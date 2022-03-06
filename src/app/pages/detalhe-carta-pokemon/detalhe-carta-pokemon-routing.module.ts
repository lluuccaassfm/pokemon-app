import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheCartaPokemonComponent } from "./detalhe-carta-pokemon.component";

const routes: Routes = [
  { path: ':id', component: DetalheCartaPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalheCartaPokemonRoutingModule { }
