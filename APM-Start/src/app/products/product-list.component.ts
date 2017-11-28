import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ProductHelpers } from '../helpers/product.helpers';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    showImage: boolean = false;
    buttonText: string = 'Show Image';
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: IProduct[];
    filteredProducts: IProduct[];

    private _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
 
    constructor() {
        this.products = ProductHelpers.generateProductTestList();
    }

    ngOnInit() {
        this.filteredProducts = this.products;
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
