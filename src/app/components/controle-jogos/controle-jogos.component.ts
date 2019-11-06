import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-jogos',
  templateUrl: './controle-jogos.component.html',
  styleUrls: ['./controle-jogos.component.css']
})
export class ControleJogosComponent implements OnInit {
  listOpr: any;
  constructor() { }

  ngOnInit() {
    this.listOpr = [
      {
        "nmOpr":"Leduar",
        "aplOpr":"Marshalls",
        "clOpr":"DMR",
        "ntFirstGun":"OK",
        "fpsFirstGun":"450",
        "ntSecondGun":"OK",
        "fpsSecondGun":"348",
        "siOpr":true
      }
    ];
  }





  

}
