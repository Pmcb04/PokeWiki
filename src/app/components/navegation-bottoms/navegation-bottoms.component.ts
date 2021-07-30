import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navegation-bottoms',
  templateUrl: './navegation-bottoms.component.html',
  styleUrls: ['./navegation-bottoms.component.css']
})
export class NavegationBottomsComponent implements OnInit {


  private next : string = "";
  private previous : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  previousPage(){
    // this.getBerries(this.previous);
    // this.offset -= this.limit;
  }

  nextPage(){
    // this.getBerries(this.next);
    // this.offset += this.limit;
  }

}
