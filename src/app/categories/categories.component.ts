import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  id : number =3;
  hovered : boolean =false;

  constructor() { }

  ngOnInit() {

  }

  onCardHover(id:number){
    this.hovered=true;
    this.id=id;
  }

  onCardHoverEnd(id:number){
    this.hovered=false;
    this.id=id;

  }
}
