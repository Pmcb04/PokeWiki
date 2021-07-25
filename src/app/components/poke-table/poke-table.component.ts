import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  constructor(private pokeService : PokemonService) {
    this.getType("bug");
  }

  ngOnInit(): void {

  }

  getType(type : string){
    this.pokeService.getType(type).subscribe(
      data =>{

          console.log("double_damage_from -> ");
          console.log("------------------------");


          for (let index = 0; index < data.damage_relations.double_damage_from.length; index++)
            console.log(data.damage_relations.double_damage_from[index].name);

          console.log("\n");
          console.log("double_damage_to -> ");
          console.log("------------------------");

          for (let index = 0; index < data.damage_relations.double_damage_to.length; index++)
            console.log( data.damage_relations.double_damage_to[index].name);

          console.log("\n");
          console.log("half_damage_from -> ");
          console.log("------------------------");

          for (let index = 0; index < data.damage_relations.half_damage_from.length; index++)
            console.log( data.damage_relations.half_damage_from[index].name);

          console.log("\n");
          console.log("half_damage_to -> ");
          console.log("------------------------");

          for (let index = 0; index < data.damage_relations.half_damage_to.length; index++)
            console.log( data.damage_relations.half_damage_to[index].name);

          console.log("\n");
          console.log("no_damage_from -> ");
          console.log("------------------------");

          for (let index = 0; index < data.damage_relations.no_damage_from.length; index++)
            console.log( data.damage_relations.no_damage_from[index].name);

          console.log("\n");
          console.log("no_damage_to -> ");
          console.log("------------------------");

          for (let index = 0; index < data.damage_relations.no_damage_to.length; index++)
            console.log( data.damage_relations.no_damage_to[index].name);

      }
    )
  }

}
