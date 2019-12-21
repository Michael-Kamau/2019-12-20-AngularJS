import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  amount: number =0;

  products:Array<object>=[
    {product:'Toyota',price:1000},
    {product:'Mazda',price:1500},
    {product:'Isuzu',price:3000},
    {product:'Nissan',price:2500},
    {product:'Subaru',price:1600}

  ];

  constructor() { }

  ngOnInit() {
  }



}
