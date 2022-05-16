import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  title: string;
  desc : string;
  img : string;
}

export interface wishbook {

  color: string;
  cols: number;
  rows: number;
  title: string;
  desc : string;
  img : string;
}

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {title: 'One', cols: 1, rows: 2, color: 'lightblue', desc: 'Book1', img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg"},
    {title: 'Two', cols: 1, rows: 2, color: 'lightgreen',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg"},
    {title: 'Three', cols: 1, rows: 2, color: 'lightpink',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/ae/d2/11/aed211bf01bb707e690cc9ad10d78840.jpg"},
    {title: 'Four', cols: 1, rows: 2, color: '#DDBDF1',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg"},
    {title: 'Four', cols: 1, rows: 2, color: '#DDBDF1',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg"},
    {title: 'Four', cols: 1, rows: 2, color: '#DDBDF1',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg"},
    {title: 'Four', cols: 1, rows: 2, color: '#DDBDF1',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg"},
  ];

  wishbooks: wishbook[] = [
    
    {title: 'One', cols: 1, rows: 2, color: 'lightblue', desc: 'Book1', img: "https://covers.zlibcdn2.com/covers299/books/7a/09/81/7a0981972454dd0a9de9cfa171c9da47.jpg"},
    {title: 'Two', cols: 1, rows: 2, color: 'lightgreen',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/70/32/d8/7032d82ffdc013053cb5ba5e04c8bc74.jpg"},
    {title: 'Three', cols: 1, rows: 2, color: 'lightpink',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/ae/d2/11/aed211bf01bb707e690cc9ad10d78840.jpg"},
    {title: 'Four', cols: 1, rows: 2, color: '#DDBDF1',desc: 'Book1', img:"https://covers.zlibcdn2.com/covers299/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg"},

  ]

  addWishlist(){
    alert("added to wishlist");
   
  }

  addCompletelist(){
    alert("added to complete list");
    this.router.navigate(['Completebook']);
  }

}
