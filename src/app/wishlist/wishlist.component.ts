import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  title: string;
  desc : string;
  img : string;
}


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute) { }

  wdata:any;



  ngOnInit(): void {
   
    this.wdata = history.state;
    console.log(history.state)
    this.tiles.push(this.wdata.data);
    console.log(this.tiles)
  }

  number_value:any;

  tiles: Tile[] = [
    {title: 'One', cols: 1, rows: 2, color: 'lightblue', desc: 'Book1', img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg"},
  ]

    add(){
      
      console.log(this.wdata.data);
      console.log(this.tiles);
    }
}
