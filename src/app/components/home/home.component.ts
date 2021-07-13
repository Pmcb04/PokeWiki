import { Component, OnInit } from '@angular/core';

/*
  offset -> id pokémon por el que empieza a contar
  limit  -> número de pokémon que se van a mostrar
*/
interface generation{
  offset  : number,
  limit   : number
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  first_gen            : generation = {offset : 0,   limit : 151};
  second_gen           : generation = {offset : 151, limit : 100};
  third_gen            : generation = {offset : 251, limit : 135};
  forth_gen            : generation = {offset : 386, limit : 107};
  fifth_gen            : generation = {offset : 493, limit : 156};
  sixth_gen            : generation = {offset : 649, limit : 72};
  seventh_gen          : generation = {offset : 721, limit : 88};
  eighth_gen           : generation = {offset : 809, limit : 83};

  constructor() { }

  ngOnInit(): void {
  }

}
