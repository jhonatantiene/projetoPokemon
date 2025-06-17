import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  pokePorIdOuNome(idOuNome: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`)
  }

  listarTodosPoke() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`)
  }
}
