import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { DataService } from './../../../data.service';
import { Stock } from './stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  stockList: Stock[];
  filteredStockList: Stock[];
  stockType: string = 'All';
  inStockCount: number;
  outOfStockCount: number;

  constructor(private dataService: DataService) {}

  filterStockList() {
    if (this.stockList && this.stockList.length) {
      this.filteredStockList = this.stockList.filter((stock) => {
        switch (this.stockType) {
          case 'In stock':
            return stock.stockStatus.toLowerCase() === 'in stock';
          case 'Out of stock':
            return stock.stockStatus.toLowerCase() === 'out of stock';
          default:
            return true;
        }
      });
    }
  }

  ngOnInit() {
    // this.dataService.storeData();
    this.dataService
      .getData('https://ng-cyble-assignment.firebaseio.com/stock.json')
      .pipe(
        map((response: any) =>
          response.map((stock) => {
            console.log(stock);
            return {
              id: stock.id.trim(),
              productName: stock.productName.trim(),
              stockStatus: stock.stockStaus.trim(),
            };
          })
        )
      )
      .subscribe((stockResponse: Stock[]) => {
        this.stockList = stockResponse;
        this.inStockCount = this.stockList.filter(
          (stock) => stock.stockStatus.toLowerCase() === 'in stock'
        ).length;
        this.outOfStockCount = this.stockList.length - this.inStockCount;
        this.filterStockList();
      });
  }
}
