import { Component, OnInit, Input } from '@angular/core';
// import { NoticiasComponent } from '../noticias/noticias.component';
import { Article } from '../../interfaces/interfaces';

import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() numeroNoticia: number;
  @Input() enFavoritos: boolean;


  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private datallocalService: DataLocalService
              ) { }

  ngOnInit() {
  }

  abrirNoticia() {
    console.log('Noticia', this.noticia.url);
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Compartir clicked');
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      }, {
        text: this.enFavoritos ? 'Eliminar de favoritos' : 'Favorito',
        icon: this.enFavoritos ? 'trash' : 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.enFavoritos ?
            this.datallocalService.borrarNoticia(this.noticia) :
            this.datallocalService.guardarNoticia(this.noticia);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
