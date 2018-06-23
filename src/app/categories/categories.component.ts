import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Category } from '../Models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  id : number =3;
  hovered : boolean =false;
  categorylist: Category[];


  constructor(private apiclientservice: ApiClientService) {

  }

  ngOnInit() {
    this.getCategories();
  }

  onCardHover(id:number){
    this.hovered=true;
    this.id=id;
  }

  onCardHoverEnd(id:number){
    this.hovered=false;
    this.id=id;

  }

  getCategories() : void {
    this.apiclientservice.getCategories()
      .subscribe((categories : {"data":Category[]}) =>{
        console.log(categories);
        this.categorylist = categories.data;
      }
    );
  }

}
