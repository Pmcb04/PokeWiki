import { Component, OnInit } from '@angular/core';
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

  private next : string = "";
  private previous : string = "";

  itemList : Item[] = [];

  constructor(private pokeService : PokemonService) {

    this.pokeService.getItems(this.offset, this.limit).subscribe(
      data =>{
        console.log(data);
        this.next = data.next;
        this.previous = data.previous;
        this.count = data.count;

        this.getListItems(data);
        console.log("itemList _> ", this.itemList);

      }
    )

  }

  ngOnInit(): void {
  }

  previousPage(){
    console.log("Retrocede pagina");
    console.log("previous -> ", this.previous);
    this.getItems(this.previous)
    this.offset -= this.limit;
  }

  nextPage(){
    console.log("Avanza pagina");
    console.log("next -> ", this.next);
    this.getItems(this.next);
    this.offset += this.limit;
  }

  getItems(url : string){
    this.pokeService.getByURL(url).subscribe(
      data =>{
        console.log(data);
        this.next = data.next;
        this.previous = data.previous;

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
