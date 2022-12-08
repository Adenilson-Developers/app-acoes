import { SotcksService } from './../../service/stocks.service';
import { Component } from "@angular/core";

@Component({
    selector: 'manage-app',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})

export class ManageComponent {
    symbols: Array<string>;
    stock: string;

    constructor(private service: SotcksService){
        this.symbols = this.service.get();
    }

    add(){
        this.symbols = this.service.add(this.stock.toUpperCase());
        this.stock = '';
    }

    remove(symbols){
        this.symbols = this.service.remove(symbols);
    }
}