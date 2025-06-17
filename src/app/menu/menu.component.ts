import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar, IonItem, IonList, IonLabel, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonIcon, IonLabel, IonList, IonItem, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
