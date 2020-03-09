import { Component, OnInit } from '@angular/core';
import {Noticia} from '../../models/noticia';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor() { }

  ngOnInit() {
    this.noticias = [{
      titulo: 'Ouro Branco',
      dsNoticia: 'Uma operação sensacional que teve sua duração de 12 horas.',
      imgCard: 'http://localhost:4200/assets/img/carroussel/img-mulambos-1.jpg'
    }];
  }

}
