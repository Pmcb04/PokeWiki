import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Sprites } from 'src/app/model/sprites';
import { PokemonService } from 'src/app/services/pokemon-service.service';

import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit{

  pokeList : Array<Pokemon> = [];

  constructor(private route: ActivatedRoute, private pokeService : PokemonService){}

  ngOnInit(){
    this.route.queryParams.subscribe (params =>{
      this.pokeList = [];
      if(params['type']) this.getPokemonByType(this.pokeList, params['type']);
      else this.getListPokemon(this.pokeList, params['offset'], params['limit']);
    });
  }

  getPokemonByType(list : Pokemon[], type : string){
    this.pokeService.getType(type).subscribe(
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
        var pokemon = new Pokemon (
                            data.id,
                            data.name,
                            this.typesPokemon(data.types),
                            this.spritesPokemon(data.sprites)
                            );
        list.push(pokemon);
        list.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      }
    )

  }

  typesPokemon(data : any) : string[]{
    var types : string[] = [data.length];

    for (let index = 0; index < data.length; index++)
      types[index] = data[index].type.name;

    return types;
  }

  spritesPokemon(data: any): Sprites {

    return new Sprites(
      data.front_default,
      data.front_shiny,
      data.back_default,
      data.back_shiny,
      data.front_female,
      data.front_shiny_female,
      data.back_female,
      data.back_shiny_female
    );
  }

}
