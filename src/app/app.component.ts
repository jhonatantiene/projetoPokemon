import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuComponent } from "./menu/menu.component";
import { addIcons } from 'ionicons';
import { gridOutline, searchOutline, starOutline } from 'ionicons/icons'

addIcons({
  'grid-outline': gridOutline,
  'star-outline': starOutline,
  'search': searchOutline
})

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {}
}
