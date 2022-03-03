import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Rotas} from "./shared/enums/rotas";

const routes: Routes = [
  {
    path: Rotas.LISTA_CARTA,
    loadChildren: () => import('./pages/lista-carta-pokemon/lista-carta-pokemon.module')
      .then(m => m.ListaCartaPokemonModule)
  },
  {
    path: Rotas.DETALHE_CARTA,
    loadChildren: () => import('./pages/detalhe-carta-pokemon/detalhe-carta-pokemon.module')
      .then(m => m.DetalheCartaPokemonModule)
  },
  {
    path: '',
    redirectTo: Rotas.LISTA_CARTA,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
