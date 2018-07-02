import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Category } from '../Models/category';
import { Router } from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedCategory : string;
  categorylist: Category[];

  constructor(private route: ActivatedRoute,private apiclientservice: ApiClientService,private router: Router) {
    //use queryParamMap instead
    this.route.queryParamMap.subscribe(
       params =>{
         this.selectedCategory=params.get('category');
         console.log(params);
         console.log('category id ='+this.selectedCategory);
        //this.param1 = params['param1'];
         //this.param2 = params['param2'];
       }
     );
  }

  ngOnInit() {
    this.getCategories();
  }

  onCategoryClicked(cat : Category){
    //this.selectedCategory=cat;
    this.router.navigate(['/home'],{queryParams : {category:cat._id}})
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
