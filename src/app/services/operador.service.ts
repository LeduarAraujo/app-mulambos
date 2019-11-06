import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { GenericService } from "./generic.service";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class OperadorService {

    operadorRef: AngularFireList<any>;

    constructor(private db:AngularFireDatabase, private service:GenericService) {
        this.service.setEntity("operador");
    }
    
    getOperador() {
        return this.db.list("operador").snapshotChanges()
        .pipe(
            map(changes => {
            return changes.map(opr => ({ key: opr.payload.key, ...opr.payload.val() }));
            })
        );
    }

    incluirOperador(operador:any){
        this.service.register(operador);
    }
}