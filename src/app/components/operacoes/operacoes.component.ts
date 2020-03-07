import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OperacaoService} from '../../services/operacao.service';
import {map, switchMap} from 'rxjs/operators';
import {Operacao} from '../../models/operacao';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.css']
})
export class OperacoesComponent implements OnInit {
  operacao: Operacao = new Operacao();

  constructor(
    private route: ActivatedRoute,
    private operacaoService: OperacaoService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map( (params: any) => {
        this.operacaoService.getOperacao(params.cdOperacao).pipe(
          map((opr: Operacao) => {
            this.setDadosOperacao(opr);
          })
        );
      })
    );
  }
  getDadosOperacao(): Operacao {
    return this.operacao;
  }
  setDadosOperacao(dadosOperacao: Operacao) {
    debugger;
    this.operacao = dadosOperacao;
  }
}
