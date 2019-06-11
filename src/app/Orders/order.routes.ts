import { Routes, RouterModule }  from '@angular/router';
import { orderComponent } from './order.component';
import { LayoutComponent } from '../layout/layout.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { PreparingOrderComponent } from './preparing-order/preparing-order.component';
import { ReadyOrdersComponent } from './ready-orders/ready-orders.component';
import {PastOrdersComponent  } from './past-orders/past-orders.component';
import { ReportsComponent } from './reports/reports.component';
import { BusinessMetricsComponent } from './business-metrics/business-metrics.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';

const orderRoutes: Routes = [     
            { path: '', component: LayoutComponent, canActivate: [], children: [    
            { path: '', redirectTo: 'NewOrders', pathMatch: 'full' },
            { path: 'NewOrders', component:NewOrdersComponent},
            { path: 'preparingOrder', component:PreparingOrderComponent},
            { path: 'readyOrders', component:ReadyOrdersComponent},
            { path: 'PastOrders', component:PastOrdersComponent},            
            { path: 'reports', component:ReportsComponent},
            { path: 'business-metrics', component:BusinessMetricsComponent},
            { path: 'order-taking', component:OrderTakingComponent},
            // Not found
            { path: '**', redirectTo: 'NewOrders' }    
    ]
} 

];

export const orderROUTES = RouterModule.forChild(orderRoutes);
  