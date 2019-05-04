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


  orderNumber: any;
  grand_total: number = 263;
  item_total: number = 240;
  package_charges: number = 11;
  GST: number = 12;
  discount: number = 0;
  orderDetails: any;
  orderQuantity: any;
  orderTotal: any;
  orderPresent = true;

  cardDetails = [
    {
      "hotel_location": "Banashankari, Srinagar, Bangalore",
      "order_id": "1046",
      "item_quantity": "3",
      "order_price": "347.5",
      "bill_id":"399572885840",
      "total_item":"4",
      "total_bill":"4400",
      "order_Details":
        [
          {
            "item_name": "Savour Special Chicken Biryani",
            "item_main_category": "INDIAN",
            "item_sub_category": "BIRYANIS",
            "item_price": "170",
            "item_qty": "3",
            "item_category": "veg"
          },
          {
            "item_name": "BBQ Chicken (1 Pc)",
            "item_main_category": "ARABIAN",
            "item_sub_category": "CHICKEN STARTERS",
            "item_price": "110",
            "item_qty": "1",
            "item_category": "nonveg"
          },
          {
            "item_name": "Royal Chicken Burger",
            "item_main_category": "QUICK BITES",
            "item_sub_category": "BURGERS",
            "item_price": "120",
            "item_qty": "5",
            "item_category": "veg"
          },
          {
            "item_name": "Wheat Paratha Tawa",
            "item_main_category": "INDIAN ",
            "item_sub_category": "INDIAN BREADS",
            "item_price": "120",
            "item_qty": "5",
            "item_category": "nonveg"
          },
        ]
    },
    {
      "hotel_location": "Jaynagar, Srinagar, Bangalore",
      "order_id": "1047",
      "item_quantity": "2",
      "order_price": "547.5",
      "bill_id":"399572885841",
      "total_item":"4",
      "total_bill":"4300",
      "order_Details":
        [
          {
            "item_name": "Savour Special Chicken Biryani",
            "item_main_category": "INDIAN",
            "item_sub_category": "BIRYANIS",
            "item_price": "190",
            "item_qty": "4",
            "item_category": "veg"
          },
          {
            "item_name": "BBQ Chicken (2 Pc)",
            "item_main_category": "ARABIAN",
            "item_sub_category": "CHICKEN STARTERS",
            "item_price": "410",
            "item_qty": "4",
            "item_category": "nonveg"
          },
          {
            "item_name": "Royal Chicken Burger",
            "item_main_category": "QUICK BITES",
            "item_sub_category": "BURGERS",
            "item_price": "1820",
            "item_qty": "9",
            "item_category": "veg"
          },
        ]
    },
    {
      "hotel_location": "Srinagar, Bangalore",
      "order_id": "1048",
      "item_quantity": "4",
      "order_price": "847.5",
      "bill_id":"399572885842",
      "total_item":"4",
      "total_bill":"4900",
      "order_Details":
        [
          {
            "item_name": "Savour Special Chicken Biryani",
            "item_main_category": "INDIAN",
            "item_sub_category": "BIRYANIS",
            "item_price": "170",
            "item_qty": "3",
            "item_category": "veg"
          },         
          {
            "item_name": "Wheat Paratha Tawa",
            "item_main_category": "INDIAN ",
            "item_sub_category": "INDIAN BREADS",
            "item_price": "120",
            "item_qty": "5",
            "item_category": "nonveg"
          },
        ]
    }
  ]

  // orderDetails =[
  // {
  //   "item_name":"Savour Special Chicken Biryani",
  //   "item_main_category":"INDIAN",
  //   "item_sub_category":"BIRYANIS",
  //   "item_price":"170",
  //   "item_qty":"3",
  //   "item_category":"veg"
  // },
  // {
  //   "item_name":"BBQ Chicken (1 Pc)",
  //   "item_main_category":"ARABIAN",
  //   "item_sub_category":"CHICKEN STARTERS",
  //   "item_price":"110",
  //   "item_qty":"1",
  //   "item_category":"nonveg"
  // },
  // {
  //   "item_name":"Royal Chicken Burger",
  //   "item_main_category":"QUICK BITES",
  //   "item_sub_category":"BURGERS",
  //   "item_price":"120",
  //   "item_qty":"5",
  //   "item_category":"veg"
  // },
  // {
  //   "item_name":"Wheat Paratha Tawa",
  //   "item_main_category":"INDIAN ",
  //   "item_sub_category":"INDIAN BREADS",
  //   "item_price":"120",
  //   "item_qty":"5",
  //   "item_category":"nonveg"
  // },

  // ]



  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit() {
  }

  showOrderDetails(orderid) {
    this.orderDetails = "";
    this.orderNumber = "";
    this.orderQuantity = "";
    this.orderTotal = "";
    this.orderDetails = (orderid.order_Details)
    this.orderNumber = orderid.bill_id;
    this.orderQuantity = orderid.total_item;
    this.orderTotal = orderid.total_bill;
    // alert(JSON.stringify(orderid.order_Details))
  }

}
