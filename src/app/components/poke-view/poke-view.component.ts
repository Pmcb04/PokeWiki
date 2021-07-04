import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.css']
})
export class PokeViewComponent implements OnInit {

  name : string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Pokemon view ", this.name);
    this.name = this.route.snapshot.params['name'];
  }

}
