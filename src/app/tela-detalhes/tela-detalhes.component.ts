import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonMenuButton, IonContent, IonCard } from "@ionic/angular/standalone";
import { PokeApiService } from '../servicos/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tela-detalhes',
  templateUrl: './tela-detalhes.component.html',
  styleUrls: ['./tela-detalhes.component.scss'],
  imports: [IonCard, IonContent, IonToolbar, IonHeader, IonMenuButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TelaDetalhesComponent implements OnInit {

  constructor(private rota: ActivatedRoute, private api: PokeApiService) { }

  imagens: any
  informacoes: any

  ngOnInit() {
    const id = this.rota.snapshot.paramMap.get('id')
    if (id) {
      this.api.pokePorIdOuNome(id).subscribe((res: any) => {
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
          id: res.id
        }
      })
    }

  }


}
