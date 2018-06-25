import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Router } from "@angular/router";
import { Product } from '../Models/Product';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  productlist: Product[];


  constructor(private apiclientservice: ApiClientService,private router: Router) {

  }

  ngOnInit() {

  }


}
