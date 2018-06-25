import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ApiClientService } from '../api-client.service';
import { Router } from "@angular/router";
import { Product } from '../Models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: string;
  hovered : boolean =false;

  categoryid : string;
  productlist: Product[];

  constructor(private route: ActivatedRoute,private apiclientservice: ApiClientService,private router: Router) {
      this.route.params.subscribe(
         params =>{
           console.log(params);
           this.categoryid=params.id;
         }
       );
  }


  ngOnInit() {
    this.getProducts(this.categoryid);
  }


  onCardHover(id:string){
    this.hovered=true;
    this.id=id;
  }

  onCardHoverEnd(id:string){
    this.hovered=false;
    this.id=id;

  }
  onProductClicked(id : string){
    console.log('clicked= id = '+id);
    this.router.navigate(['/product/'+id])
  }

  getProducts(id:string) : void {
    this.apiclientservice.getProducts(id)
      .subscribe((products : {"data":Product[]}) =>{
        console.log(products);
        this.productlist = products.data;
      }
    );
  }


}
