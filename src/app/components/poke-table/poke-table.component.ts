import { keyframes } from '@angular/animations';
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

  strongTypes : string[] = [];
  weakTypes : string[] = [];
  inmuneTypes : string[] = [];

  damageMatrix : Map<string, Map<string,string>> = new Map<string, Map<string, string>>();

  constructor(private route: ActivatedRoute, private pokeService : PokemonService) { }

  ngOnInit(): void {

    // Obtenemos el parametro que nos viene por queryParams
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

    // Calculamos el daño de cada tipo de movimiento
    this.types.forEach(element => {
      this.getDamageType(element);
    });


  }

  change_type(){

    this.strongTypes = [];
    this.weakTypes = [];
    this.inmuneTypes = [];

    for (let [key, value] of this.damageMatrix.get(this.typeParams)!) {
      if(value === "2") this.weakTypes.push(key);
      else if(value === "0.5") this.strongTypes.push(key);
      else if (value === "0") this.inmuneTypes.push(key);
    }

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
            this.damageMatrix.get(type)!.set( data.damage_relations.no_damage_from[index].name, "0")

          // Comprobamos si algun tipo a sido pasado por parametro en la url para mostrar sus datos
          if(this.typeParams !== "") this.change_type();


      }
    )
  }

}
