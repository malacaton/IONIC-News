import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage,
              private toastController: ToastController) {
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find(noti => noti.title === noticia.title &&
                                              noti.source === noticia.source);

    if (!existe) {
      this.noticias.unshift(noticia); // Es igual que push, pero lo pone al principio del array
      this.storage.set('favoritos', this.noticias);
      this.presentToast('Guardado en Favoritos');
    }
  }

  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(noti => !(noti.title === noticia.title &&
                                                   noti.source === noticia.source));
    this.storage.set('favoritos', this.noticias);
    this.presentToast('Eliminado de Favoritos');
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    if (favoritos) {
      this.noticias = favoritos;
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      color: 'light'
    });
    toast.present();
  }
}
