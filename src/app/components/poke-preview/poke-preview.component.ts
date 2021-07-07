import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon'

@Component({
  selector: 'poke-preview',
  templateUrl: './poke-preview.component.html',
  styleUrls: ['./poke-preview.component.css']
})

export class PokePreviewComponent implements OnInit {

  @Input() public pokemon : Pokemon;

  constructor(){
    this.pokemon = new Pokemon(0, "", "", [""]);
    //this.setColorBorder();
  }

  // setColorBorder(){
  //   switch (this.pokemon.types[0]) {
  //     case "bug":
  //       document.documentElement.style.setProperty('--border-color', 'green'); // color border
  //       break;
  //     case "fire":
  //       document.documentElement.style.setProperty('--border-color', 'red'); // color border
  //       break;
  //     default:
  //       break;
  //   }
  // }

   ngOnInit(): void {
  }

}
