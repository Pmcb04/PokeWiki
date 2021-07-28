import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { EvolutionChain, PokemonChain } from 'src/app/model/evolution-chain';
import { Move } from 'src/app/model/move';
import { Pokemon } from 'src/app/model/pokemon';
import { Sprites } from 'src/app/model/sprites';
import { Stats } from 'src/app/model/stats';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit {

  pokemon : Pokemon = new Pokemon();
  evolutionChain : EvolutionChain = new EvolutionChain();
  star : string = "star_black";
  genre : string = "man";
  isShiny : boolean = false;
  isFemale : boolean = false;
  isBack : boolean = false;
  sprit : string = "";

  change_star(){
    this.isShiny = !this.isShiny;
    this.isShiny ? this.star = "star_yellow" : this.star = "star_black";
    this.sprit = this.pokemon.getNewSprit(this.isShiny, this.isFemale, this.isBack);
    if(this.sprit === null) this.sprit = this.pokemon.getNewSprit(this.isShiny, !this.isFemale, this.isBack);
  }

  change_position(){
    this.isBack = !this.isBack;
    this.sprit = this.pokemon.getNewSprit(this.isShiny, this.isFemale, this.isBack);
    if(this.sprit === null) this.sprit = this.pokemon.getNewSprit(this.isShiny, !this.isFemale, this.isBack);
  }

  change_genre(){
    this.isFemale = !this.isFemale;
    this.isFemale ? this.genre = "woman" : this.genre = "man";
    this.sprit = this.pokemon.getNewSprit(this.isShiny, this.isFemale, this.isBack);
    if(this.sprit === null) this.sprit = this.pokemon.getNewSprit(this.isShiny, !this.isFemale, this.isBack);
  }

  constructor(private route: ActivatedRoute, private pokeService : PokemonService) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe (params =>{
      this.pokeService.getPokemonByName(params['name']).subscribe(
        data =>{
          var typesPokemon : string[] = this.typesPokemon(data.types);
          var statsPokemon : Stats = this.statsPokemon(data.stats);
          var movesPokemon : Move[] = this.movesPokemon(data.moves);
          var spritesPokemon : Sprites = this.spritesPokemon(data.sprites);
          this.getEvolutionChain(data.species.url);


          this.pokemon = new Pokemon(data.id, data.name, typesPokemon, spritesPokemon, data.height, data.weight, statsPokemon, movesPokemon);

          this.sprit = this.pokemon.getFrontSpriteMale();
          this.isShiny = false;
          this.isFemale = false;
          this.isBack = false;

          this.star = "star_black";
          this.genre = "man"
        }
      )
    });
  }


  statsPokemon(data : any) : Stats{
    var stats : Stats = new Stats();
    for (let index = 0; index < data.length; index++) {

      switch (data[index].stat.name) {
        case 'hp':
          stats.setHp(data[index].base_stat, data[index].effort);
          break;
        case 'attack':
          stats.setAttack(data[index].base_stat, data[index].effort);
          break;
        case 'defense':
          stats.setDefense(data[index].base_stat, data[index].effort);
          break;
        case 'special-attack':
          stats.setSpecialAttack(data[index].base_stat, data[index].effort);
          break;
        case 'special-defense':
          stats.setSpecialDefense(data[index].base_stat, data[index].effort);
          break;
        case 'speed':
          stats.setSpeed(data[index].base_stat, data[index].effort);
          break;
        default:
          break;
      }
    }
    return stats;
  }

  typesPokemon(data : any) : string[]{
    var types : string[] = [];

    for (let index = 0; index < data.length; index++){
      types[index] = data[index].type.name;
    }

    return types;
  }

  movesPokemon(data: any): Move[] {
    var moves : Move[] = [];

    for (let index = 0; index < data.length; index++){

      this.pokeService.getMoveByURL(data[index].move.url)
       .subscribe(
         data =>{
           moves.push(new Move(
             data.name,
             data.type.name,
             data.accuracy,
             data.effect_chance,
             data.pp,
             data.priority,
             data.power
           ))
         }
      )
   }

    return moves;
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

  getEvolutionChain(data : string){

    var evolutionChain : EvolutionChain = new EvolutionChain();
    var index : number = 0;

    this.pokeService.getPokemonSpeciesByURL(data).subscribe(
      data =>{
         this.pokeService.getEvolutionChainByURL(data.evolution_chain.url).subscribe(
            data => {
              this.evolutionPokemon(data.chain, evolutionChain, index);
              this.evolutionChain = evolutionChain;
            }
         )
      }
    )

  }

  evolutionPokemon(data: any, evolutionChain : EvolutionChain, index : number) {

    if(data != null){
      this.pokeService.getPokemonByName(data.species.name).subscribe(
        data =>{
          evolutionChain.add(new PokemonChain(data.id, data.name, data.sprites.front_default));
        }
      )
      index = index + 1;
      for (let i = 0; i < data.evolves_to.length; i++)
        this.evolutionPokemon(data.evolves_to[i], evolutionChain, index);
    }

  }


}
