import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControleJogosComponent } from './components/controle-jogos/controle-jogos.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import {OperacoesComponent} from './components/operacoes/operacoes.component';


const routes: Routes = [
  { path: '' , component: PaginaInicialComponent },
  { path: 'controleJogos' , component: ControleJogosComponent },
  { path: 'operacao/:cdOperacao', component: OperacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
