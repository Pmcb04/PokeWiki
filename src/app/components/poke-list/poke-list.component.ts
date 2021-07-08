import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import { Pokemon, Stats } from '../../model/pokemon';
import { PokemonService } from '../../services/pokemon-service.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit{

  pokeList : Pokemon[] = Array();

  // attributes for list of pokemon
  limit : number = 151;
  offset : number = 0;
  next : string = "";
  previous : string = "";

  // number of pokemon in generation number
  first_gen : number = 151;
  second_gen : number = 100;
  third_gen : number = 135;
  forth_gen : number = 107;
  fifth_gen : number = 156;
  sixth_gen : number = 72;
  seventh_gen : number = 81;
  eighth_gen : number = 83;


  constructor(private route: ActivatedRoute, private pokeService : PokemonService){
    this.route.queryParams.subscribe (params =>{
      this.getListPokemon(this.pokeList, params['offset'], params['limit']);
    });

    // console.log("sort");
    // this.pokeList.sort(function sortPokemon(pok1: Pokemon, pok2: Pokemon) {
    //     console.log("comparando ", pok1.name, " con ", pok2.name);
    //     return pok1.id - pok2.id;
    // });
  }

  ngOnInit(){}

  previousList(){
    // TODO ver como calcular la lista de pokemon anterior
  }

  nextList(){
    // TODO ver como calcular la lista de pokemon posterior
  }

  getListPokemon(list : Pokemon[], offset : number, limit : number){
    this.pokeService.getAllPokemon(offset, limit).subscribe(
      data => {
          this.next = data.next;
          this.previous = data.previous;
          this.generatePokemon(data, list);
      }
    );
  }

  generatePokemon(data : any, list : Pokemon[]){
    for (let index = 0; index < data.results.length; index++) {
        this.pokeService.getPokemonByURL(data.results[index].url)
        .subscribe(
          data =>{
            var typesPokemon : string[] = this.typesPokemon(data.types);
            list.push(new Pokemon(data.id, data.name, data.sprites.front_default, typesPokemon));
          }
        );
    }
  }

  typesPokemon(data : any) : string[]{
    var types : string[] = [data.length];

    for (let index = 0; index < data.length; index++)
      types[index] = data[index].type.name;

    return types;
  }

}
