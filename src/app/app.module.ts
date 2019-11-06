import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuRodapeComponent } from './components/menu-rodape/menu-rodape.component';
import { ControleJogosComponent } from './components/controle-jogos/controle-jogos.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

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
    AppRoutingModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
