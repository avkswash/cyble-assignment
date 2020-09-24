import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { map } from 'rxjs/operators';

import { DataService } from './../../../data.service';
import { DeliveryStatus } from './delivery-status';

@Component({
  selector: 'app-delivey-status',
  templateUrl: './delivey-status.component.html',
  styleUrls: ['./delivey-status.component.scss'],
})
export class DeliveyStatusComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  deliveryStatusList: DeliveryStatus[];
  statusType: string[];

  constructor(private dataService: DataService) {
    this.statusType = ['In progress', 'Completed', 'Canceled'];
  }

  getChartData() {
    let series = [];
    this.statusType.forEach((status) => {
      series.push({
        name: status,
        y: this.deliveryStatusList.filter((x) => x.deliveryStatus === status)
          .length,
      });
    });
    console.log(series);
    return series;
  }

  createChart() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: '',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      legend: {
        alignColumns: false,
      },
      series: [
        {
          name: 'count',
          colorByPoint: true,
          type: 'pie',
          data: this.getChartData(),
        },
      ],
    };
  }

  ngOnInit() {
    this.dataService
      .getData('https://ng-cyble-assignment.firebaseio.com/delivery.json')
      .pipe(
        map((response: any) =>
          response.map((deliveryStatus) => {
            return {
              id: deliveryStatus.id.trim(),
              productName: deliveryStatus.productName.trim(),
              deliveryStatus: deliveryStatus.deliveryStatus.trim(),
            };
          })
        )
      )
      .subscribe((deliveryStatusResponse: DeliveryStatus[]) => {
        this.deliveryStatusList = deliveryStatusResponse;
        this.createChart();
      });
  }
}
