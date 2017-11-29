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

    constructor(private _httpClient: HttpClient) {}

    // getCalender(): any {
    //     let ical = require('ical');
    //     let months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    //     ical.fromURL(this._calenderUrl, {}, function(err, data) {
    //         return data;
    //     });
    // }

    getProductsPromise(): Promise<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
        .toPromise()
        .catch(this.promiseError);
    }

    getProductsObservable(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private promiseError(error: HttpErrorResponse) {
        console.log(error.message);
        return Promise.reject(error.message || error);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
