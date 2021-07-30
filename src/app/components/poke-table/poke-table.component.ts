import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  types : string[] =  ["bug", "dark", "dragon", "electric", "fairy",
                       "fighting", "fire", "flying", "ghost", "grass",
                       "ground", "ice", "normal", "poison", "psychic",
                       "rock", "steel", "water"]

  typeParams : string = "";

  damageMatrix : Map<string, Map<string,string>> = new Map<string, Map<string, string>>();

  constructor(private route: ActivatedRoute, private pokeService : PokemonService) {

    // obtenemos el parametro que nos viene por queryParams
    this.route.queryParams.subscribe (params =>{
      this.typeParams = params['type'];
    });

    // Inicializamos cada map con su correspondiente tipo y su mapa
    this.types.forEach(element => {
      this.damageMatrix.set(element, new Map<string, string>());
    });

    // Rellenamos cada mapa de cada tipo con todos los tipos disponibles
    this.damageMatrix.forEach(element => {
      this.types.forEach(type => {
        element.set(type, ""); // rellenamos a 1 por ser el elemento neutro
      });
    });

    // Por ultimo, calculamos el daño de cada tipo de movimiento
    this.types.forEach(element => {
      this.getDamageType(element);
    });

    console.log("damageMAtrix -> ",   this.damageMatrix);
  }

  ngOnInit(): void {

  }


  // from lista de tipos a los que hacen daño a el tipo calculado
  // to lista de tipos a los que hace daño a el tipo calculado
  getDamageType(type : string){

    this.pokeService.getType(type).subscribe(
      data =>{

          for (let index = 0; index < data.damage_relations.double_damage_from.length; index++)
            this.damageMatrix.get(type)!.set(data.damage_relations.double_damage_from[index].name, "2");

          for (let index = 0; index < data.damage_relations.half_damage_from.length; index++)
            this.damageMatrix.get(type)!.set(data.damage_relations.half_damage_from[index].name, "0.5");

          for (let index = 0; index < data.damage_relations.no_damage_from.length; index++)
            this.damageMatrix.get(type)!.set( data.damage_relations.no_damage_from[index].name, "0");

          // for (let index = 0; index < data.damage_relations.double_damage_to.length; index++)
          //   this.damageMatrix.get(data.damage_relations.double_damage_to[index].name)!.set(type, "x2");

          // for (let index = 0; index < data.damage_relations.half_damage_to.length; index++)
          //   this.damageMatrix.get(data.damage_relations.half_damage_to[index].name)!.set(type, "1/2");

          // for (let index = 0; index < data.damage_relations.no_damage_to.length; index++)
          //   this.damageMatrix.get(data.damage_relations.no_damage_to[index].name)!.set(type, "0");


      }
    )
  }

}
