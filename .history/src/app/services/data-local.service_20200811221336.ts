import { Injectable } from '@angular/core';

import { IonicStorageModule } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage) { }

  guardarNoticia(noticia: Article) {
    this.noticias.unshift(noticia); // Es igual que push, pero lo pone al principio del array
    this.storage.set('favoritos', this.noticias);
  }

  cargarFavoritos() {

  }
}

