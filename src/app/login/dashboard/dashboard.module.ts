import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { StockComponent } from './stock/stock.component';
import { DeliveyStatusComponent } from './delivey-status/delivey-status.component';
import { SalesComponent } from './sales/sales.component';
import { SystemGlanceComponent } from './system-glance/system-glance.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HighchartsChartModule,
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    UserComponent,
    SystemGlanceComponent,
    SalesComponent,
    DeliveyStatusComponent,
    StockComponent
  ],
})
export class DashboardModule {}
