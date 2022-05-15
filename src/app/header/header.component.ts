import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShown:any;
  
  constructor() { }
  
  

  ngOnInit(): void {
    this.isShown = true;
  }

  dashboardshow(){
   this.isShown = ! this.isShown;
  }

}
