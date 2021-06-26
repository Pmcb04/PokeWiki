import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2"

  constructor(private http: HttpClient) { }

  // Obtiene todos los pokemon
  getAllPokemon() {
    return this.http.get<any>(`${this.url}/pokemon/`)
  }


  // Obtiene el pokemon con id pasado por parametro
  getPokemon(pokemonId : number) {
    return this.http.get<any>(`${this.url}/pokemon/${pokemonId}`)
  }


}
