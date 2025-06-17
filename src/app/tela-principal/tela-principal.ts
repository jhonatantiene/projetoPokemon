import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tela-principal',
  templateUrl: 'tela-principal.html',
  styleUrls: ['tela-principal.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TelaPrincipal {
  constructor() {}
}
