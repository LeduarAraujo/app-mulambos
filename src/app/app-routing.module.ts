import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControleJogosComponent } from './components/controle-jogos/controle-jogos.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  { path: '' , component: PaginaInicialComponent },
  { path: 'controleJogos' , component: ControleJogosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
