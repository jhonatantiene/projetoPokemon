import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton } from '@ionic/angular/standalone';
import { MenuComponent } from "../menu/menu.component";
import { PokeApiService } from '../servicos/poke-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tela-principal',
  templateUrl: 'tela-principal.html',
  styleUrls: ['tela-principal.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MenuComponent, IonMenuButton],
})
export class TelaPrincipal implements OnInit {
  constructor(private api: PokeApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buscarPokePorIdOuNome('')
  }

  buscarPokePorIdOuNome(idOuNome: string) {
    this.api.pokePorIdOuNome(idOuNome).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err.message)
        this.snackBar.open('Erro ao buscar pokemon!', 'Fechar', {
          duration: 5000
        })
      }
    });
  }


}
