import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  noticias: Article[] = [];

  categorias = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    console.log('this.segment.value...');
    this.segment.value = this.categorias[0];
    console.log('this.segment.value', this.segment.value);
    this.noticiasService.getTopHeadlinesCategorias(this.categorias[0])
    .subscribe(resp => {
      console.log('categorias', resp);
      this.noticias.push( ...resp.articles );
      });
  }

  cambioCategoria(event) {
  //   this.cargarNoticias(event);
  }

  // cargarNoticias(categoria: string) {
  //   this.segment.value = this.categorias[0];
  //   this.noticiasService.getTopHeadlinesCategorias(this.categorias[0])
  //     .subscribe(resp => {
  //       console.log('categorias', resp);
  //       this.noticias.push( ...resp.articles );
  //     });
  // }
}
