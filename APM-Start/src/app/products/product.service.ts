import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
// import * as ical from 'ical.js';

@Injectable()
export class ProductService {

    private _productUrl = './api/products/products.json';

    private _calenderUrl = 'http://ics.mosbach.dhbw.de/ics/inf16a.ics';

    constructor(private _httpClient: HttpClient) {}

    // getCalender(): any {
    //     let ical = require('ical');
    //     let months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
    //     ical.fromURL(this._calenderUrl, {}, function(err, data) {
    //         return data;
    //     });
    // }
    
    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProductFromId(id: number): IProduct {
        return {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            'releaseDate': "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        };
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
