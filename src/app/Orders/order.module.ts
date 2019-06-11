import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { orderROUTES } from './order.routes';
import { orderComponent } from './order.component';
import { LayoutModule } from '../layout/layout.module';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { PreparingOrderComponent } from './preparing-order/preparing-order.component';
import { ReadyOrdersComponent } from './ready-orders/ready-orders.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { genericModule } from '../genericComponent/genericComponent.module';
import { AppStateModule } from '../appstate.module';
import { CountdownModule } from 'ngx-countdown';
import { ReportsComponent } from './reports/reports.component';
import { BusinessMetricsComponent } from './business-metrics/business-metrics.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';

export const routes = [
  { path: '', component: orderComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    orderROUTES,
    LayoutModule,
    genericModule,
    AppStateModule,
    CountdownModule
  ],
  declarations: [NewOrdersComponent, PreparingOrderComponent, ReadyOrdersComponent, PastOrdersComponent, ReportsComponent, BusinessMetricsComponent, OrderTakingComponent],
    providers:[DatePipe]
})
export class orderModule { 
  
}