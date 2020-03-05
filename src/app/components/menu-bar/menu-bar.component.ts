import { Component, OnInit } from '@angular/core';
import {Operacao} from '../../models/operacao';
import {Observable} from 'rxjs';
import {OperacaoService} from '../../services/operacao.service';

declare var $: any;
declare var require: any;

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  arrOperacoes: Observable<Operacao>;
  operacao: any;

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.arrOperacoes = this.operacaoService.getOperacaoLista();
  }

  getNmOperacao(operacao: Operacao) {
    const situacao = operacao.inAberto ? 'Em aberto' : 'Encerrado';
    return operacao.nmOperacao + ' (' + situacao + ')';
  }
}
