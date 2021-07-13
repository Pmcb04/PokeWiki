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
    this.pokemon = new Pokemon();
  }

  ngOnInit(): void {
  }

}
