import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';


import { PokemonService } from '../../services/pokemon-service.service';


@Component({
  selector: 'poke-preview',
  templateUrl: './poke-preview.component.html',
  styleUrls: ['./poke-preview.component.css']
})

export class PokePreviewComponent implements OnInit {

  @Input() public pokemon : Pokemon;

  constructor(private pokeService : PokemonService){
    this.pokemon = new Pokemon(0, "", "");
  }

   ngOnInit(): void {
  }

  // searchPokemon(): void {
  //   // llamamos al metodo getPokemon y le pasamos el identificador del pókemon
  //   this.pokeService.getPokemon(this.number)
  //     .subscribe(
  //       data => {
  //         console.log("pokemon", data);
  //         this.pokemon = new Pokemon(
  //           data.id, data.name, data.sprites.front_default
  //         );
  //       }
  //     )
  // }

}
