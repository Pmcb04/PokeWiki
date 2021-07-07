import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
import { Pokemon, Stats } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit {

  pokemon : Pokemon = new Pokemon(0, "", "", [""]);

  constructor(private route: ActivatedRoute, private pokeService : PokemonService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe (params =>{
      this.pokeService.getPokemonByName(params['name']).subscribe(
        data =>{
          var typesPokemon : string[] = this.typesPokemon(data.types);
          var statsPokemon : Stats = this.statsPokemon(data.stats);
          this.pokemon = new Pokemon(data.id, data.name, data.sprites.front_default, typesPokemon, statsPokemon);
        }
      )
    });
  }

  statsPokemon(data : any) : Stats{
    var stats : Stats = new Stats();
    for (let index = 0; index < data.length; index++) {

      switch (data[index].stat.name) {
        case 'hp':
          stats.hp.base_stat = data[index].base_stat;
          stats.hp.effort = data[index].effort;
          break;
        case 'attack':
          stats.attack.base_stat = data[index].base_stat;
          stats.attack.effort = data[index].effort;
          break;
        case 'defense':
          stats.defense.base_stat = data[index].base_stat;
          stats.defense.effort = data[index].effort;
          break;
        case 'special-attack':
          stats.special_attack.base_stat = data[index].base_stat;
          stats.special_attack.effort = data[index].effort;
          break;
        case 'special-defense':
          stats.special_defense.base_stat = data[index].base_stat;
          stats.special_defense.effort = data[index].effort;
          break;
        case 'speed':
          stats.speed.base_stat = data[index].base_stat;
          stats.speed.effort = data[index].effort;
          break;
        default:
          break;
      }
    }
    return stats;
  }

  typesPokemon(data : any) : string[]{
    var types : string[] = [data.length];

    for (let index = 0; index < data.length; index++)
      types[index] = data[index].type.name;

    return types;
  }

}
