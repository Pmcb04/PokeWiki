import { Component } from '@angular/core';

import { Pokemon } from './model/pokemon';
import { PokemonService } from './services/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'PokeAPI'

  pokeList : Pokemon[] = Array();

  limit : number = 151;
  offset : number = 0;

  next : string = "";
  previous : string = "";

  constructor(private pokeService : PokemonService){
    this.getListPokemon(this.pokeList, this.offset, this.limit);

    // console.log("sort");
    // this.pokeList.sort(function sortPokemon(pok1: Pokemon, pok2: Pokemon) {
    //     console.log("comparando ", pok1.name, " con ", pok2.name);
    //     return pok1.id - pok2.id;
    // });
  }

  previousList(){
    // TODO ver como calcular la lista de pokemon anterior
  }

  nextList(){
    // TODO ver como calcular la lista de pokemon posterior
  }

  getListPokemon(list : Pokemon[], start : number, end : number){
    this.pokeService.getAllPokemon(start, end).subscribe(
      data => {
          this.next = data.next;
          this.previous = data.previous;
          this.generatePokemon(data, list);
      }
    );
  }

  generatePokemon(data : any, list : Pokemon[]){
    for (let index = 0; index < this.limit; index++) {
        this.pokeService.getPokemonByURL(data.results[index].url)
        .subscribe(
          data =>{
            var typesPokemon : string[] = this.typesPokemon(data.types);
            list.push(new Pokemon(data.id, data.name, data.sprites.front_default, typesPokemon));
          }
        );
    }
  }

  typesPokemon(typesData : any) : string[]{

    var types : string[] = [typesData.length];

    for (let index = 0; index < typesData.length; index++)
      types[index] = typesData[index].type.name;

    return types;

  }

}
