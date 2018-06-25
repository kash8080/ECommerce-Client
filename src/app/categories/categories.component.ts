import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Category } from '../Models/category';
import { Router } from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  id : string ;
  hovered : boolean =false;
  categorylist: Category[];


  constructor(private apiclientservice: ApiClientService,private router: Router) {

  }

  ngOnInit() {
    this.getCategories();
  }

  onCardHover(id:string){
    this.hovered=true;
    this.id=id;
  }

  onCardHoverEnd(id:string){
    this.hovered=false;
    this.id=id;

  }
  onCategoryClicked(id : string){
    console.log('clicked= id = '+id);
    this.router.navigate(['/categories/'+id])
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
