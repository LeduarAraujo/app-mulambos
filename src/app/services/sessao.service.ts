import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {User} from '../models/user';
import {error} from 'util';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  auth: any;

  constructor(private db: AngularFireDatabase) {
    this.auth = this.db.database.app.auth();
  }

  login(user: User) {
    const login = user.userLogin + '@mohmal.com';
    const passw = user.userPassword;
    return this.auth.signInWithEmailAndPassword(login, passw);
  }

  logOut() {
    this.auth.signOut();
  }

  isUsuarioLogado() {

    return this.auth.onAuthStateChanged(user => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  }


}
