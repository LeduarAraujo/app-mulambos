import {Component, OnInit} from '@angular/core';
import {SessaoService} from '../../services/sessao.service';
import {User} from '../../models/user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private servicoLogin: SessaoService, private router: Router) {
  }

  ngOnInit() {
  }

  //sd-marshalls@mohmal.com
  //2415151010

  acaoEntrar(formCadastro: NgForm) {
    this.servicoLogin.login(this.user).then(resposta => {
      this.router.navigate(['operacao',
        '-M1bvjNQ6WeKznwVd2B2']);
    }).catch(erro => {
      console.log(erro);
    });
  }
}
