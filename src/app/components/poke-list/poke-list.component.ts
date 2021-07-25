import { NodeWithI18n } from '@angular/compiler';
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

  constructor(private route: ActivatedRoute, private pokeService : PokemonService){
    this.route.queryParams.subscribe (params =>{
      if(params['type']) this.getPokemonByType(this.pokeList, params['type']);
      else this.getListPokemon(this.pokeList, params['offset'], params['limit']);

      this.getEvolutionChains()

    });


  }
  getEvolutionChains() {

    for (let index = 1; index < 79; index++) { // TODO para el numero limite de cadenas evolutivas hacer contador y llevar la cuenta de los pokemon hasta params  ['limit']
      this.pokeService.getEvolutionChain(index)
      .subscribe(
        data => {
          var index = 0;
          var names : string[] = [];

          this.getPokemonEvolution(data.chain, names, index); // TODO hay que generar las cadenas y para cada nombre de la cadena hay que generar el pokemon y      pasarle la cadena para tenerla generada


          // console.log("\n---------------------------------------------");
          // names.forEach(element => {
          //   console.log("->" , element);
          // });
          // console.log("---------------------------------------------\n");

        }
      );
    }

  }
  getPokemonEvolution(data: any, names: string[], index : number) {

    if(data != null){
      names[index] = data.species.name;
      index = index + 1;
      for (let i = 0; i < data.evolves_to.length; i++)
        this.getPokemonEvolution(data.evolves_to[i], names, index);
    }

  }

  ngOnInit(){}

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
