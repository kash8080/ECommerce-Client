import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categoryid : string;

  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe(
         params =>{
           console.log(params);
           this.categoryid=params.id;
         }
       );
  }

  ngOnInit() {
  }

}
