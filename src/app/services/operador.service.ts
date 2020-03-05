import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GenericService } from './generic.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class OperadorService {

    operadorRef: AngularFireList<any>;

    constructor(private service: GenericService) {
        this.service.setEntity('operador');
    }

    getOperador() {
        return this.service.getAll();
    }

    incluirOperador(operador:any) {
        this.service.register(operador);
    }
}
