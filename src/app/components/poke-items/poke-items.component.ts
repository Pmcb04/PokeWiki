import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-poke-items',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.css']
})
export class PokeItemsComponent implements OnInit {

  private offset : number = 0;
  private limit : number = 20;
  private count : number = 0;

  page : number = 1;
  itemList : Item[] = [];

  constructor(private route: ActivatedRoute, private pokeService : PokemonService) {
    this.getItems(this.offset, this.limit);
    this.route.queryParams.subscribe (params =>{
      this.page = params['page'];
    });
  }

  ngOnInit(): void {
  }

  previousPage(){
    if(this.offset > 0){
      this.offset -= this.limit;
      this.getItems(this.offset, this.limit);
    }
  }

  nextPage(){
    if(this.offset + this.limit < this.count){
      this.offset += this.limit;
      this.getItems(this.offset, this.limit);
    }
  }

  getItems(offset : number, limit : number){
    this.pokeService.getItems(this.offset, this.limit).subscribe(
      data =>{
        this.count = data.count;
        this.getListItems(data);
      }
    )
  }

  getListItems(data : any){

    this.itemList = [];

    for (let index = 0; index < data.results.length; index++) {
      this.pokeService.getByURL(data.results[index].url).subscribe(
        data =>{
          this.itemList.push(new Item(data.name, data.sprites.default, data.cost, data.category.name));
        }
      )
    }
  }

}
