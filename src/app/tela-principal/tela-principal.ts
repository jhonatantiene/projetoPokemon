import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonMenuButton, IonCard, IonCardContent, IonCardTitle, IonButtons, IonButton, IonIcon, IonItem, IonInput } from '@ionic/angular/standalone';
import { PokeApiService } from '../servicos/poke-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: 'tela-principal.html',
  styleUrls: ['tela-principal.scss'],
  imports: [IonItem, IonIcon, IonButton, IonButtons, IonCardTitle, IonCardContent, IonCard, IonHeader, IonToolbar, IonContent, IonMenuButton, FormsModule, IonInput],
})
export class TelaPrincipal implements OnInit {
  constructor(private api: PokeApiService, private snackBar: MatSnackBar, private router: Router) { }

  listaPokemons: any = []
  pesquisa: string = ''
  offset: number = 0;
  limit: number = 20;
  totalPokemons: number = 0;
  paginaAtual: number = 1;

  ngOnInit(): void {
    this.buscarTodosPoke()
  }

  buscarTodosPoke() {
    this.api.listarTodosPoke(this.offset, this.limit).subscribe({
      next: (res: any) => {
        let id = undefined
        this.listaPokemons = res.results.map((v: any) => {
          this.totalPokemons = res.count;
          this.paginaAtual = this.offset / this.limit + 1;
          id = v.url.split('/').slice(6, 7)[0] //pega o id da imagem
          return {
            nome: v.name,
            imgOficial: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            id: id
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

  buscarPokePorIdOuNome(idOuNome: any) {
    if (idOuNome?.trim() == '' || idOuNome == undefined || idOuNome == null) {
      return
    }
    this.api.pokePorIdOuNome(idOuNome).subscribe({
      next: (res: any) => {
        this.listaPokemons = [{
          nome: res.name,
          imgOficial: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`,
          id: res.id
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

  proximaPagina() {
    if (this.offset + this.limit < this.totalPokemons) {
      this.offset += this.limit;
      this.buscarTodosPoke();
    }
  }

  paginaAnterior() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.buscarTodosPoke();
    }
  }

  totalPaginas(): number {
    return Math.ceil(this.totalPokemons / this.limit);
  }

  irParaDetalhes(id: number) {
    this.router.navigate(['/telaDetalhes', id])
  }

}