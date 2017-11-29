import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: ProductService ) {
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this._service.getProductsPromise().then(
      products => {
         this.product = products.find( p => p.productId === id);
      }
    );
  }

  onBack() {
    this._router.navigate(['/products']);
  }

}
