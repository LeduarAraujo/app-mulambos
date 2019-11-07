import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Operador } from 'src/app/models/operador';
import { OperadorService } from 'src/app/services/operador.service';

declare var $: any;

@Component({
  selector: 'app-cadastro-operador',
  templateUrl: './cadastro-operador.component.html',
  styleUrls: ['./cadastro-operador.component.css']
})
export class CadastroOperadorComponent implements OnInit {

  operador: Operador;

  constructor(private operadorService: OperadorService) {
    this.init();
  }

  ngOnInit() {
  }

  cadastroOperador(formCadastro: NgForm) {
    this.operador.siOpr = true;
    this.operadorService.incluirOperador(this.operador);
    this.init();
    $("#exampleModalCenter").modal("toggle");
  }

  init(){
    this.operador = new Operador();
    this.operador.clOpr = "Selecione";
    this.operador.ntFirstGun = "NOK";
    this.operador.ntSecondGun = "NOK";
  }

}
