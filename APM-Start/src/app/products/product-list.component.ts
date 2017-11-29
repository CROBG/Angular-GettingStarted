import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    showImage: boolean = true;
    buttonText: string = 'Hide Image';
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    filteredProducts: IProduct[];
    errorMessage: string;

    private _listFilter: string;
    private products: IProduct[];

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor( private _productService: ProductService ) {
    }

    loadProducts() {
        this._productService.getProductsObservable()
        .subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error );
    }

    ngOnInit() {
        this.loadProducts();
    }

    onRatingClicked(message: string) {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filter: string): IProduct[] {
        filter = filter.toLocaleLowerCase();
        return this.products.filter( product => product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
    }

    toggleImage() {
        this.showImage = !this.showImage;
        if (this.buttonText === 'Show Image') {
            this.buttonText = 'Hide Image';
        } else {
            this.buttonText = 'Show Image';
        }
    }
}
