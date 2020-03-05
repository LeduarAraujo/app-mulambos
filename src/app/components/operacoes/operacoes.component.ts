import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OperacaoService} from '../../services/operacao.service';
import {map} from 'rxjs/operators';
import {Operacao} from '../../models/operacao';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.css']
})
export class OperacoesComponent implements OnInit {
  nuOperacao: Operacao;

  constructor(
    private route: ActivatedRoute,
    private operacaoService: OperacaoService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map( (params: any) => {
        const resposta$ = this.operacaoService.getOperacao(params.cdOperacao).pipe(
          map((operacao: Operacao) => {
            return operacao;
          })
        );
    }));
  }
}
