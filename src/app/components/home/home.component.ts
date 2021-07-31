import { Component, OnInit } from '@angular/core';
import { Generation } from 'src/app/model/generation';

/*
  offset -> id pokémon por el que empieza a contar
  limit  -> número de pokémon que se van a mostrar
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  first_gen            : Generation = {offset : 0,   limit : 151};
  second_gen           : Generation = {offset : 151, limit : 100};
  third_gen            : Generation = {offset : 251, limit : 135};
  forth_gen            : Generation = {offset : 386, limit : 107};
  fifth_gen            : Generation = {offset : 493, limit : 156};
  sixth_gen            : Generation = {offset : 649, limit : 72};
  seventh_gen          : Generation = {offset : 721, limit : 88};
  eighth_gen           : Generation = {offset : 809, limit : 83};

  types : string[] =  ["bug", "dark", "dragon", "electric", "fairy",
  "fighting", "fire", "flying", "ghost", "grass",
  "ground", "ice", "normal", "poison", "psychic",
  "rock", "steel", "water"]

  constructor() {}

  ngOnInit(): void {
  }

}
