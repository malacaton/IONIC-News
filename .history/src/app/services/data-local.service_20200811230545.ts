import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find(noti => noti.title === noticia.title);

    if (!existe) {
      this.noticias.unshift(noticia); // Es igual que push, pero lo pone al principio del array
      this.storage.set('favoritos', this.noticias);
    }
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos')
    console.log('async favoritos', favoritos);
    return favoritos;
  }
}

