import { Component, OnInit } from '@angular/core';
import {Operacao} from '../../models/operacao';
import {Observable} from 'rxjs';
import {OperacaoService} from '../../services/operacao.service';
import {SessaoService} from '../../services/sessao.service';

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
  isUsuarioLogado: boolean = false;

  constructor(private operacaoService: OperacaoService,
              private sessao: SessaoService) { }

  ngOnInit() {
    debugger;
    this.arrOperacoes = this.operacaoService.getOperacaoLista();
    this.isUsuarioLogado = this.sessao.isUsuarioLogado();
    debugger;
  }

  getNmOperacao(operacao: Operacao) {
    const situacao = operacao.inAberto ? 'Em aberto' : 'Encerrado';
    return operacao.nmOperacao + ' (' + situacao + ')';
  }

  isUserLogado() {
    return this.isUsuarioLogado;
  }

  deslogar() {
    this.sessao.logOut();
  }
}
