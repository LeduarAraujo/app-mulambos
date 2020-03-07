import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  auth: any;
  isLogado: boolean;

  constructor(private db: AngularFireDatabase) {
    this.auth = this.db.database.app.auth();
    this.auth.onAuthStateChanged( user => {
      if (user) {
        this.isLogado = true;
      }
    });
  }

  login(user: User) {
    const login = user.userLogin + '@mohmal.com';
    const passw = user.userPassword;
    return this.auth.signInWithEmailAndPassword(login, passw);
  }

  logOut() {
    this.auth.signOut().complete(retorno => {
      this.isLogado = false;
    });
  }

  isUsuarioLogado(): boolean {
    return this.isLogado;
  }
}
