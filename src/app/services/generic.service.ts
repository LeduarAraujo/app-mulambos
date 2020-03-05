import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  dadosEntidadeGenerica: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
  }

  setEntity(entity: string) {
    this.dadosEntidadeGenerica = this.db.list(entity);
  }

  getAll(): Observable<any> {
    return this.dadosEntidadeGenerica.snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(opr => ({
            key: opr.payload.key,
            ...opr.payload.val()
          }));
        })
      );
  }

  register(objeto: any) {
    return this.dadosEntidadeGenerica.push(objeto);
  }

  delete(id: any) {
    this.dadosEntidadeGenerica.remove(id);
  }

  update(id: any, objeto?: any) {
    this.dadosEntidadeGenerica.update(id, objeto);
  }

  search(id: any): Observable<any> {
    return this.dadosEntidadeGenerica.valueChanges(id);
  }

  querySearch(sql: any) {
    return this.dadosEntidadeGenerica;
  }
}
