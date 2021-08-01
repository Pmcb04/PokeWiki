import { Component, OnInit } from '@angular/core';
import { Berry } from 'src/app/model/berry';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'poke-berries',
  templateUrl: './poke-berries.component.html',
  styleUrls: ['./poke-berries.component.css']
})
export class PokeBerriesComponent implements OnInit {

  private offset : number = 0;
  private limit : number = 20;
  private count : number = 0;

  berriesList : Berry[] = [];

  constructor(private pokeService : PokemonService) {
    this.getBerries(this.offset, this.limit)
  }

  ngOnInit(): void {
  }

  previousPage(){
    if(this.offset > 0){
      this.offset -= this.limit;
      this.getBerries(this.offset, this.limit);
    }
  }

  nextPage(){
    if(this.offset + + this.limit < this.count){
      this.offset += this.limit;
      this.getBerries(this.offset, this.limit);
    }
  }

  getBerries(offset : number, limit : number){
    this.pokeService.getBerries(offset, limit).subscribe(
      data =>{
        this.count = data.count;
        this.getListBerries(data);
      }
    )

  }

  getListBerries(data : any){

    this.berriesList = [];

    for (let index = 0; index < data.results.length; index++) {
      this.pokeService.getByURL(data.results[index].url).subscribe(
        data1 =>{
          this.pokeService.getByURL(data1.item.url).subscribe(
            data2 =>{
              this.berriesList.push(new Berry(
                                      data2.name,
                                      data2.sprites.default,
                                      data1.growth_time,
                                      data1.max_harvest,
                                      data1.natural_gift_power,
                                      data1.size,
                                      data1.natural_gift_type.name
                                    ));
            }
          )
        }
      )
    }
  }


}
