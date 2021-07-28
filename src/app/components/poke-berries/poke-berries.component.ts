import { Component, OnInit } from '@angular/core';
import { Berry } from 'src/app/model/berry';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-poke-berries',
  templateUrl: './poke-berries.component.html',
  styleUrls: ['./poke-berries.component.css']
})
export class PokeBerriesComponent implements OnInit {

  private offset : number = 0;
  private limit : number = 20;
  private count : number = 0;

  private next : string = "";
  private previous : string = "";

  berriesList : Berry[] = [];

  constructor(private pokeService : PokemonService) {

    this.pokeService.getBerries(this.offset, this.limit).subscribe(
      data =>{
        console.log(data);
        this.next = data.next;
        this.previous = data.previous;
        this.count = data.count;

        this.getListBerries(data);
        console.log("BerryList _> ", this.berriesList);

      }
    )

  }

  ngOnInit(): void {
  }

  previousPage(){
    console.log("Retrocede pagina");
    console.log("previous -> ", this.previous);
    this.getBerries(this.previous)
    this.offset -= this.limit;
  }

  nextPage(){
    console.log("Avanza pagina");
    console.log("next -> ", this.next);
    this.getBerries(this.next);
    this.offset += this.limit;
  }

  getBerries(url : string){
    this.pokeService.getByURL(url).subscribe(
      data =>{
        console.log(data);
        this.next = data.next;
        this.previous = data.previous;

        this.getListBerries(data);
      }
    )

  }

  getListBerries(data : any){

    this.berriesList = [];

    for (let index = 0; index < data.results.length; index++) {
      this.pokeService.getByURL(data.results[index].url).subscribe(
        data =>{
          this.pokeService.getByURL(data.item.url).subscribe(
            data =>{
              this.berriesList.push(new Berry(data.name, data.sprites.default));
            }
          )
        }
      )
    }
  }


}
