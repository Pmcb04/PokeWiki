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

  // Obtiene todos los pokemon por la pokedex que le pasamos por parametro
  getAllPokemonByPokedex(pokedex : string) {
    return this.http.get<any>(`${this.url}/pokedex/${pokedex}`)
  }

  // Obtiene todos los pokemon por la pokedex que le pasamos por parametro
  getAllPokemonByType(type : string) {
    return this.http.get<any>(`${this.url}/type/${type}`)
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

  // Obtiene un movimiento por url pasado por parametro
  getMoveByURL(url : string){
    return this.http.get<any>(url);
  }

  // Obtiene un movimiento por nombre pasado por parametro
  getMoveByName(name : string){
    return this.http.get<any>(`${this.url}/move/${name}`);
  }

}
