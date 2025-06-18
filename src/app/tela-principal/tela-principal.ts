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

  listaPokemons: any = []

  ngOnInit(): void {
    this.buscarTodosPoke()
  }

  buscarTodosPoke() {
    this.api.listarTodosPoke().subscribe({
      next: (res: any) => {
        let id = undefined
        this.listaPokemons = res.results.map((v: any) => {
          id = v.url.split('/').slice(6, 7)[0] //pega o id da imagem
          return {
            nome: v.name,
            imgOficial: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          }
        })
      },
      error: (err) => {
        console.error(err.message)
        this.snackBar.open('Erro ao buscar pokemon!', 'Fechar', {
          duration: 5000
        })
      }
    })
  }

  buscarPokePorIdOuNome(idOuNome: string) {
    if (idOuNome.trim() == '' || idOuNome == undefined || idOuNome == null) {
      return
    }
    this.api.pokePorIdOuNome(idOuNome).subscribe({
      next: (res: any) => {
        this.listaPokemons = [{
          nome: res.name,
          imgOficial: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`
        }]
      },
      error: (err) => {
        console.error(err.message)
        this.snackBar.open('Pokemon não encontrado!', 'Fechar', {
          duration: 5000
        })
      }
    });
  }


}
