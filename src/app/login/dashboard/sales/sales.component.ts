import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { map } from 'rxjs/operators';

import { DataService } from './../../../data.service';
import { Sales } from './sales';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  salesList: Sales[];
  months: string[];

  constructor(private dataService: DataService) {
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
    ];
  }

  getChartData() {
    let series = [];
    const products = Array.from(
      new Set(this.salesList.map((x) => x.productName))
    );
    products.forEach((product) => {
      let seriesObj = {
        name: product,
        type: 'column',
        data: [],
      };
      this.months.forEach((month) => {
        const soldCountArr = this.salesList
          .filter((x) => x.productName === product && x.month === month)
          .map((x) => x.soldCount);
        if (soldCountArr.length) {
          seriesObj.data.push(soldCountArr.reduce((a, b) => a + b));
        } else {
          seriesObj.data.push(0);
        }
      });
      series.push(seriesObj);
    });
    return series;
  }

  createChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        layout: 'horizontal',
        borderWidth: 1,
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.legend.backgroundColor) ||
          '#FFFFFF',
        shadow: true,
      },
      xAxis: {
        categories: this.months,
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Products Sold',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
        },
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: false,
          },
        },
        series: {
          stacking: 'normal',
        },
      },
      credits: {
        enabled: false,
      },
      series: this.getChartData(),
    };
  }

  ngOnInit() {
    this.dataService
      .getData('https://ng-cyble-assignment.firebaseio.com/sales.json')
      .pipe(
        map((response: any) =>
          response.map((sales) => {
            return {
              id: sales.id.trim(),
              productName: sales.productName.trim(),
              soldCount: sales.soldCount,
              month: sales.month.trim(),
            };
          })
        )
      )
      .subscribe((salesResponse: Sales[]) => {
        this.salesList = salesResponse;
        this.createChart();
      });
  }
}
