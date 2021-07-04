import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2"

  constructor(private http: HttpClient) { }

  // Obtiene todos los pokemon
  getAllPokemon(offset : number, limit : number) {
    return this.http.get<any>(`${this.url}/pokemon/?offset=${offset}&limit=${limit}`)
  }


  // Obtiene el pokemon con id pasado por parametro
  getPokemon(pokemonId : number) {
    return this.http.get<any>(`${this.url}/pokemon/${pokemonId}`)
  }

  // Obtiene el pokemon por url pasado por parametro
  getPokemonByURL(url : string){
    return this.http.get<any>(url);
  }

}
