import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStocks } from '../models/Stock';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'http://localhost:3000';

@Injectable()

export class SotcksService{
    
    constructor(private http: HttpClient){}


    get(){
        return stocks.slice();
    }

    add(stock: string){
        stocks.push(stock)
        return this.get()
    }

    remove(stock: any){
        stocks.splice(stocks.indexOf(stock), 1);
        return this.get();
    }

    load(symbols: any){
        if(symbols){ 
            console.log('console aque')
            return this.http.get<Array<InterfaceStocks>>(
                service + '/stocks/snapshot?symbols=' + stocks.join());
               
        }
    }

}