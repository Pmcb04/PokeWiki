import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css']
})
export class PokeTypeComponent implements OnInit {

  @Input() name : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
