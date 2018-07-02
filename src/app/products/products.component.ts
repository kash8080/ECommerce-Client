import { Component, OnInit,Input,SimpleChange } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ApiClientService } from '../api-client.service';
import { Router } from "@angular/router";
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //@Input() category: Category;
  private mycategory: string;
  loading :boolean=false;

  id: string;
  hovered : boolean =false;

  productlist: Product[];

  @Input() set category(value: string) {
     this.mycategory = value;
     if(value!=null){
       this.getProducts(this.mycategory);
     }
  }
  get category(): string {
      return this.mycategory;
  }
  ngOnChanges(changes: SimpleChange) {
  }


  constructor(private route: ActivatedRoute,private apiclientservice: ApiClientService,private router: Router) {
      this.route.params.subscribe(
         params =>{
           console.log(params);
           //this.categoryid=params.id;
         }
       );
  }


  ngOnInit() {
    //this.getProducts(this.category._id);
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
    this.router.navigate(['/product/'+id])
  }

  getProducts(id:string) : void {
    this.loading=true;
    this.apiclientservice.getProducts(id)
      .subscribe((products : {"data":Product[]}) =>{
        console.log(products);
        this.productlist = products.data;
        this.loading=false;
      }
    );
  }


}
