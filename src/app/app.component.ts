import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuComponent } from "./menu/menu.component";
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline, gridOutline, searchOutline, starOutline } from 'ionicons/icons'
import { register } from 'swiper/element/bundle';

register();

addIcons({
  'grid-outline': gridOutline,
  'star-outline': starOutline,
  'search': searchOutline,
  'arrow-forward-outline': arrowForwardOutline,
  'arrow-back-outline': arrowBackOutline,
})

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {}
}
