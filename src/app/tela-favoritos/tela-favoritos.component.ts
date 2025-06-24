import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonMenuButton, IonContent, IonList, IonItem, IonItemSliding, IonThumbnail, IonLabel, IonIcon, IonButtons } from "@ionic/angular/standalone";
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tela-favoritos',
  templateUrl: './tela-favoritos.component.html',
  styleUrls: ['./tela-favoritos.component.scss'],
  imports: [IonButtons, IonIcon, IonLabel, IonItemSliding, IonItem, IonList, IonContent, IonToolbar, IonHeader, IonMenuButton, IonThumbnail]
})
export class TelaFavoritosComponent implements ViewWillEnter {

  constructor(private route: Router) { }

  listaFavoritos: any = []

  ionViewWillEnter() {
    this.buscarFavoritos()
  }

  buscarFavoritos() {
    this.listaFavoritos = localStorage.getItem('favoritos')
    this.listaFavoritos = JSON.parse(this.listaFavoritos)
  }

  verDetalhes(id: number) {
    this.route.navigate(['/telaDetalhes', id])
  }

}
