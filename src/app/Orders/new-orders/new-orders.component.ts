import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.scss']
})
export class NewOrdersComponent implements OnInit {


  color = 'primary';
  mode = 'determinate';
  value = 90;
  orderNumber:number = 123456789;

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit() {
  }
  
  showOrderDetails(orderid)
  {
    this.orderNumber=orderid;
  }

}
