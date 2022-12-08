import { Component, OnInit } from '@angular/core';
import { InterfaceStocks } from 'src/app/models/Stock';

import { SotcksService } from './../../service/stocks.service';

@Component({
    selector: 'dashboard-app',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    stocks: Array<InterfaceStocks>;
    symbols: Array<string>;

    constructor(private service: SotcksService){
        this.symbols = service.get();
    }

    ngOnInit(): void {
      this.service.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);  
    }
}