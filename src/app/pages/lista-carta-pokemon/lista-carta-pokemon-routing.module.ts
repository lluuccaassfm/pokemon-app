import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCartaPokemonComponent } from "./lista-carta-pokemon.component";

const routes: Routes = [
  { path: '', component: ListaCartaPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaCartaPokemonRoutingModule { }
