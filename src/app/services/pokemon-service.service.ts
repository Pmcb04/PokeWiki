import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2"

  constructor(private http: HttpClient) { }

  // Obtiene todos los pokemons desde la posicion offset, y el numero de pokemon que indica limit
  getAllPokemon(offset : number, limit : number) {
    return this.http.get<any>(`${this.url}/pokemon/?offset=${offset}&limit=${limit}`);
  }

  // Obtiene todos los pokemon por la pokedex que le pasamos por parametro
  getAllPokemonByPokedex(pokedex : string) {
    return this.http.get<any>(`${this.url}/pokedex/${pokedex}`);
  }

  // Obtiene toda la informacion sobre el tipo pasado por parametro
  getType(type : string) {
    return this.http.get<any>(`${this.url}/type/${type}`);
  }

  // Obtiene el pokemon con id pasado por parametro
  getPokemonById(id : number) {
    return this.http.get<any>(`${this.url}/pokemon/${id}`);
  }

  // Obtiene el pokemon con name pasado por parametro
  getPokemonByName(name : string) {
    return this.http.get<any>(`${this.url}/pokemon/${name}`);
  }

  // Obtiene un movimiento por nombre pasado por parametro
  getMoveByName(name : string){
    return this.http.get<any>(`${this.url}/move/${name}`);
  }

  // obtiene la cadena de evolucion por número de id pasado por parametro
  getEvolutionChain(id : number){
    return this.http.get<any>(`${this.url}/evolution-chain/${id}`);
  }

  // obtiene todos los items desde la posicion offset, y el numero de items que indica limit
  getItems(offset : number, limit : number){
    return this.http.get<any>(`${this.url}/item/?offset=${offset}&limit=${limit}`);
  }

  // obtiene todos los items desde la posicion offset, y el numero de items que indica limit
  getBerries(offset : number, limit : number){
    return this.http.get<any>(`${this.url}/berry/?offset=${offset}&limit=${limit}`);
  }

  // obtiene la cadena de evolucion por número de id pasado por parametro
  getEvolutionChainByURL(url : string){
    return this.http.get<any>(url);
  }

  // obtiene la cadena de evolucion por número de id pasado por parametro
  getPokemonSpeciesByURL(url : string){
    return this.http.get<any>(url);
  }

  // obtiene una lista de los objetos por url pasado por parametro
  getItemsByURL(url : string){
    return this.http.get<any>(url);
  }

  // Obtiene el pokemon por url pasado por parametro
  getPokemonByURL(url : string){
    return this.http.get<any>(url);
  }

  // Obtiene un movimiento por url pasado por parametro
  getMoveByURL(url : string){
    return this.http.get<any>(url);
  }

  // obtiene la respuesta de la url que la pasemos por parametro
  getByURL(url : string){
    return this.http.get<any>(url);
  }

}
