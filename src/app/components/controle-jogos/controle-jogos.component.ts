import { Component, OnInit } from '@angular/core';

import { OperadorService } from 'src/app/services/operador.service';

import { Observable } from 'rxjs';

import { Operador } from 'src/app/models/operador';

declare var $: any;

@Component({
  selector: 'app-controle-jogos',
  templateUrl: './controle-jogos.component.html',
  styleUrls: ['./controle-jogos.component.css']
})
export class ControleJogosComponent implements OnInit {

  operador: Operador;
  listOpr: Observable<any>;

  constructor(private operadorService: OperadorService) {
    this.operador = new Operador();
  }

  ngOnInit() {

    // this.incluirOperador();

    this.listOpr = this.operadorService.getOperador();
    console.log( this.operadorService.getOperador());

    // this.listOpr = [
    //   {
    //     "nmOpr":"Leduar",
    //     "aplOpr":"Marshalls",
    //     "clOpr":"DMR",
    //     "ntFirstGun":"OK",
    //     "fpsFirstGun":"450",
    //     "ntSecondGun":"OK",
    //     "fpsSecondGun":"348",
    //     "siOpr":true
    //   }
    // ];
  }

  
  incluirOperador() {
    
    this.operador.nmOpr = "Leduar";
    this.operador.aplOpr = "Marshalls";
    this.operador.clOpr = "DMR";
    this.operador.ntFirstGun = "OK";
    this.operador.fpsFirstGun = "450";
    this.operador.ntSecondGun = "OK";
    this.operador.fpsSecondGun = "348";
    this.operador.siOpr = true;

    this.operadorService.incluirOperador(this.operador);

  }

  criarPDF() {
    let tabela = document.getElementById("tabelaOperador").innerHTML;

    let win = window.open("","","height=700,width=700");
    win.document.write("<html><head>");
    win.document.write("<title>Lista jogo dia 10/11/2019</title>");
    win.document.write("</head><body>");
    win.document.write(tabela);
    win.document.write("</body></html>");
    win.document.close();

    win.print();
  }

}
