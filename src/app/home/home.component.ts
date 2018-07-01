import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Category } from '../Models/category';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedCategory : Category;
  categorylist: Category[];

  constructor(private apiclientservice: ApiClientService,private router: Router) {

  }

  ngOnInit() {
    this.getCategories();
  }

  onCategoryClicked(cat : Category){
    this.selectedCategory=cat;
    //this.router.navigate(['/categories/'+id])
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
