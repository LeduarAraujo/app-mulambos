import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuRodapeComponent } from './components/menu-rodape/menu-rodape.component';
import { ControleJogosComponent } from './components/controle-jogos/controle-jogos.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuRodapeComponent,
    ControleJogosComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
