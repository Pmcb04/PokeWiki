import { Component, OnInit } from '@angular/core';


import { Pokemon } from './model/pokemon';
import { PokemonService } from './services/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  title = 'PokeAPI';

  
  pokeList1: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ,30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  
  pokeList : Pokemon[];
  
  constructor(private pokeService : PokemonService){
    this.pokeList = Array();
    this.getListPokemon();
  }

  getListPokemon(): void{
    // llamamos al metodo getPokemon y le pasamos el identificador del pókemon
    this.pokeService.getAllPokemon()
      .subscribe(
        data => {
          console.log("pokemonList", data);

          for (let index = 0; index < 20; index++) {
            console.log('pokemon ' + index + " -> ", data.results[index]);
            this.pokeList.push(new Pokemon(1, data.results[index].name, "sprit")) // TODO pasar correctamente los datos del pokemon
          }

          // var pokemon = new Pokemon(
          //   1, data.result.name, ""
          // );

          // this.pokeList.push(pokemon);
        }
      )
  }

}
