import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GenericService } from './generic.service';
import {map, tap} from 'rxjs/operators';
import {Operacao} from '../models/operacao';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  operadorRef: AngularFireList<any>;

  constructor(private service: GenericService) {
    this.service.setEntity('operacao');
  }

  getOperacaoLista(): Observable<Operacao> {
    return this.service.getAll();
  }

  incluirOperacao(operacao: any) {
    this.service.register(operacao);
  }

  getOperacao(key: any): Observable<Operacao> {
    return this.service.search(key).pipe(
      map((operacao: Operacao) => {
        return operacao;
      }));
  }
}
