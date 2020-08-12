import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault(); // No se ve la barra con el reloj, batería y demás notificaciones
      this.statusBar.styleLightContent();
      // this.statusBar.styleBlackOpaque(); // La barra de notificaciones se ve con fondo negro
      // this.statusBar.styleBlackTranslucent(); //   "    "    "    "    "    "
      this.splashScreen.hide();
    });
  }
}
