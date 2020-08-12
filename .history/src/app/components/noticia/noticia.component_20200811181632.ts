import { Component, OnInit, Input } from '@angular/core';
import { NoticiasComponent } from '../noticias/noticias.component';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() numeroNoticia: number;

  constructor() { }

  ngOnInit() {}

  abrirNoticia() {
    console.log(noticia.url);
  }
}
