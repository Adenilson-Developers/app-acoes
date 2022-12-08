import { Component } from '@angular/core';
import { InterfaceStocks } from './models/Stock';
import { SotcksService } from './service/stocks.service';


// export interface strucksElement {
//   symbol: string,
//   lastTradePriceOnly: string,
//   change: string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // stocks: Array<strockInterface> ;

  stocks: Array<InterfaceStocks>;

  constructor( private service: SotcksService){
    this.service.load('APPL').subscribe(
      stock => {
         this.stocks = stock;
        }
    );
    console.log('---->', this.stocks)
  }
}

