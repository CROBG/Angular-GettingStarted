import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { HelpersModule } from './../helpers/helpers.module';
import { ProductsRoutingModule } from './products-routing/products-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HelpersModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
