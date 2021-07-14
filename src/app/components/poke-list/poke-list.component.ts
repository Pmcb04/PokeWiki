import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { PokemonService } from 'src/app/services/pokemon-service.service';

import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit{

  pokeList : Array<Pokemon> = [];

  constructor(private route: ActivatedRoute, private pokeService : PokemonService){
    this.route.queryParams.subscribe (params =>{
      if(params['type']) this.getPokemonByType(this.pokeList, params['type']);
      else this.getListPokemon(this.pokeList, params['offset'], params['limit']);
    });


  }

  ngOnInit(){}

  previousList(){
    // TODO ver como calcular la lista de pokemon anterior
  }

  nextList(){
    // TODO ver como calcular la lista de pokemon posterior
  }

  getPokemonByType(list : Pokemon[], type : string){
    this.pokeService.getAllPokemonByType(type).subscribe(
      data => {
        for (let index = 0; index < data.pokemon.length; index++) {
          this.generatePokemon(list, data.pokemon[index].pokemon.url);
        }
      }
    )
  }

  getListPokemon(list : Pokemon[], offset : number, limit : number){
    this.pokeService.getAllPokemon(offset, limit).subscribe(
      data => {
        for (let index = 0; index < data.results.length; index++) {
          this.generatePokemon(list, data.results[index].url);
        }
      }
    );

  }

  generatePokemon(list : Pokemon[] , data : string){

   this.pokeService.getPokemonByURL(data)
    .subscribe(
      data =>{
        var pokemon = new Pokemon (data.id, data.name, data.sprites.front_default, this.typesPokemon(data.types));
        list.push(pokemon);
        list.sort((a,b) => (a.getID() > b.getID()) ? 1 : ((b.getID() > a.getID()) ? -1 : 0));
      }
    )

  }


  typesPokemon(data : any) : string[]{
    var types : string[] = [data.length];

    for (let index = 0; index < data.length; index++)
      types[index] = data[index].type.name;

    return types;
  }

}
