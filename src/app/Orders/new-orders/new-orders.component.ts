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

  
  orderNumber:number = 0;
  grand_total:number = 263;
  item_total:number = 240;
  package_charges:number = 11;
  GST:number = 12;
  discount:number = 0;

    orderDetails =[
        {
          "item_name":"Savour Special Chicken Biryani",
          "item_main_category":"INDIAN",
          "item_sub_category":"BIRYANIS",
          "item_price":"170",
          "item_qty":"3",
          "item_category":"veg"
        },
        {
          "item_name":"BBQ Chicken (1 Pc)",
          "item_main_category":"ARABIAN",
          "item_sub_category":"CHICKEN STARTERS",
          "item_price":"110",
          "item_qty":"1",
          "item_category":"nonveg"
        },
        {
          "item_name":"Royal Chicken Burger",
          "item_main_category":"QUICK BITES",
          "item_sub_category":"BURGERS",
          "item_price":"120",
          "item_qty":"5",
          "item_category":"veg"
        },
        {
          "item_name":"Wheat Paratha Tawa",
          "item_main_category":"INDIAN ",
          "item_sub_category":"INDIAN BREADS",
          "item_price":"120",
          "item_qty":"5",
          "item_category":"nonveg"
        },

    ]



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
