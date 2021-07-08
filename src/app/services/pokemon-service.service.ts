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

  // Obtiene todos los pokemon
  getAllPokemonByPokedex(pokedex : string) {
    return this.http.get<any>(`${this.url}/pokedex/${pokedex}`)
  }

  // Obtiene el pokemon con id pasado por parametro
  getPokemonById(id : number) {
    return this.http.get<any>(`${this.url}/pokemon/${id}`)
  }

  // Obtiene el pokemon con name pasado por parametro
  getPokemonByName(name : string) {
    return this.http.get<any>(`${this.url}/pokemon/${name}`)
  }

  // Obtiene el pokemon por url pasado por parametro
  getPokemonByURL(url : string){
    return this.http.get<any>(url);
  }

}
