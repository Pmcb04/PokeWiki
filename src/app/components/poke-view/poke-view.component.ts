import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Move } from 'src/app/model/move';
import { Pokemon } from 'src/app/model/pokemon';
import { Stats } from 'src/app/model/stats';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit {

  pokemon : Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private pokeService : PokemonService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe (params =>{
      this.pokeService.getPokemonByName(params['name']).subscribe(
        data =>{
          var typesPokemon : string[] = this.typesPokemon(data.types);
          var statsPokemon : Stats = this.statsPokemon(data.stats);
          var movesPokemon : Move[] = this.movesPokemon(data.moves);
          this.pokemon = new Pokemon(data.id, data.name, data.sprites.front_default, typesPokemon, data.height, data.weight, statsPokemon, movesPokemon);
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


}
