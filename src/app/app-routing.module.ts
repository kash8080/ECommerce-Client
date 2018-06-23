import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/categories' },
  { path: 'categories', component: CategoriesComponent    },
  { path: 'categories/:id', component: ProductsComponent    },
  { path: 'cart', component: CartComponent    },
  { path: 'orders', component: OrdersComponent    },
  { path: '**', component: PagenotfoundComponent    }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [
    CategoriesComponent,PagenotfoundComponent,ProductsComponent,ProductdetailComponent,CartComponent,OrdersComponent
  ];
}
