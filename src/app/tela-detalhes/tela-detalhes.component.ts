import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonMenuButton, IonContent, IonCard } from "@ionic/angular/standalone";
import { PokeApiService } from '../servicos/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tela-detalhes',
  templateUrl: './tela-detalhes.component.html',
  styleUrls: ['./tela-detalhes.component.scss'],
  imports: [IonCard, IonContent, IonToolbar, IonHeader, IonMenuButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TelaDetalhesComponent implements OnInit {

  constructor(private rota: ActivatedRoute, private api: PokeApiService, private snackBar: MatSnackBar) { }

  imagens: any
  informacoes: any
  jaExisteNosFavoritos: boolean = true

  async ngOnInit() {
    await this.infoPokeSelecionado()
    this.alteraBotaoFavorito()
  }

  infoPokeSelecionado(): Promise<void> {
    return new Promise((resolve) => {
      const id = this.rota.snapshot.paramMap.get('id')

      if (id) {
        this.api.pokePorIdOuNome(id).subscribe({
          next: (res: any) => {
            this.imagens = [
              { titulo: 'Oficial', url: res.sprites.other?.['official-artwork']?.front_default },
              { titulo: 'Oficial_shiny', url: res.sprites.other?.['official-artwork']?.front_shiny },
            ].filter(img => img.url)

            this.informacoes = {
              nome: res.name,
              tipos: res.types.map((t: any) => t.type.name),
              altura: res.height / 10,
              peso: res.weight / 10,
              habilidades: res.abilities.map((h: any) => h.ability.name),
              id: res.id,
              urlImg: res.sprites.other?.['official-artwork']?.front_default
            }

            resolve()
          }
        })
      } else {
        return
      }
    })
  }

  alteraBotaoFavorito(): Promise<void> {
    return new Promise((resolve) => {
      const favoritosSalvos = localStorage.getItem('favoritos')
      const favoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : []
      this.jaExisteNosFavoritos = favoritos.some((p: any) => p.id === this.informacoes!.id)
      resolve()
    })
  }

  adicionarAosFavoritos() {
    if (!this.informacoes) {
      return
    }
    const favoritosSalvos = localStorage.getItem('favoritos')
    const favoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : []
    const jaExiste = favoritos.some((p: any) => p.id === this.informacoes!.id)

    if (!jaExiste) {
      favoritos.push(this.informacoes)
      localStorage.setItem('favoritos', JSON.stringify(favoritos))
    } else {
      return
    }

    this.alteraBotaoFavorito()
    this.snackBar.open('Adicionado aos favoritos', '', {
      duration: 1000
    })
  }

  removerDosFavoritos() {
    if (!this.informacoes) return;

    const favoritosSalvos = localStorage.getItem('favoritos')
    const favoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : []

    const novosFavoritos = favoritos.filter((p: any) => p.id !== this.informacoes.id)

    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos))
    this.jaExisteNosFavoritos = false

    this.alteraBotaoFavorito()

    this.snackBar.open('Removido dos favoritos', '', {
      duration: 1000
    })
  }

}
