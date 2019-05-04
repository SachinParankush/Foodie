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
export const routes = [
  { path: '', component: orderComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    orderROUTES,
    LayoutModule,
    genericModule
  ],
  declarations: [NewOrdersComponent, PreparingOrderComponent, ReadyOrdersComponent, PastOrdersComponent],
    providers:[DatePipe]
})
export class orderModule { 
  
}