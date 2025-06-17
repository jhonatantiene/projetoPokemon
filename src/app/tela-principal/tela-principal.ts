import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton } from '@ionic/angular/standalone';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-tela-principal',
  templateUrl: 'tela-principal.html',
  styleUrls: ['tela-principal.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MenuComponent, IonMenuButton],
})
export class TelaPrincipal {
  constructor() {}
}
