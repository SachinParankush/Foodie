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
      "total_items": "3",
      "sub_total": "347.5",
      "bill_id":"399572885840",
      "total_item":"4",
      "total_amount":"4400",
      "order_Details":
        [
          {
            "dish_name": "Savour Special Chicken Biryani",
            "main_cat_name": "INDIAN",
            "sub_cat_name": "BIRYANIS",
            "item_price": "170",
            "item_qty": "3",
            "item_category": "veg"
          },
          {
            "dish_name": "BBQ Chicken (1 Pc)",
            "main_cat_name": "ARABIAN",
            "sub_cat_name": "CHICKEN STARTERS",
            "item_price": "110",
            "item_qty": "1",
            "item_category": "nonveg"
          },
          {
            "dish_name": "Royal Chicken Burger",
            "main_cat_name": "QUICK BITES",
            "sub_cat_name": "BURGERS",
            "item_price": "120",
            "item_qty": "5",
            "item_category": "veg"
          },
          {
            "dish_name": "Wheat Paratha Tawa",
            "main_cat_name": "INDIAN ",
            "sub_cat_name": "INDIAN BREADS",
            "item_price": "120",
            "item_qty": "5",
            "item_category": "nonveg"
          },
        ]
    },
    {
      "hotel_location": "Jaynagar, Srinagar, Bangalore",
      "order_id": "1047",
      "total_items": "2",
      "sub_total": "547.5",
      "bill_id":"399572885841",
      "total_item":"4",
      "total_bill":"4300",
      "order_Details":
        [
          {
            "dish_name": "Savour Special Chicken Biryani",
            "main_cat_name": "INDIAN",
            "sub_cat_name": "BIRYANIS",
            "item_price": "190",
            "item_qty": "4",
            "item_category": "veg"
          },
          {
            "dish_name": "BBQ Chicken (2 Pc)",
            "main_cat_name": "ARABIAN",
            "sub_cat_name": "CHICKEN STARTERS",
            "item_price": "410",
            "item_qty": "4",
            "item_category": "nonveg"
          },
          {
            "dish_name": "Royal Chicken Burger",
            "main_cat_name": "QUICK BITES",
            "sub_cat_name": "BURGERS",
            "item_price": "1820",
            "item_qty": "9",
            "item_category": "veg"
          },
        ]
    },
    {
      "hotel_location": "Srinagar, Bangalore",
      "order_id": "1048",
      "total_items": "4",
      "sub_total": "847.5",
      "bill_id":"399572885842",
      "total_item":"4",
      "total_bill":"4900",
      "order_Details":
        [
          {
            "dish_name": "Savour Special Chicken Biryani",
            "main_cat_name": "INDIAN",
            "sub_cat_name": "BIRYANIS",
            "item_price": "170",
            "item_qty": "3",
            "item_category": "veg"
          },         
          {
            "dish_name": "Wheat Paratha Tawa",
            "main_cat_name": "INDIAN ",
            "sub_cat_name": "INDIAN BREADS",
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
  //   "main_cat_name":"INDIAN",
  //   "sub_cat_name":"BIRYANIS",
  //   "item_price":"170",
  //   "item_qty":"3",
  //   "item_category":"veg"
  // },
  // {
  //   "item_name":"BBQ Chicken (1 Pc)",
  //   "main_cat_name":"ARABIAN",
  //   "sub_cat_name":"CHICKEN STARTERS",
  //   "item_price":"110",
  //   "item_qty":"1",
  //   "item_category":"nonveg"
  // },
  // {
  //   "item_name":"Royal Chicken Burger",
  //   "main_cat_name":"QUICK BITES",
  //   "sub_cat_name":"BURGERS",
  //   "item_price":"120",
  //   "item_qty":"5",
  //   "item_category":"veg"
  // },
  // {
  //   "item_name":"Wheat Paratha Tawa",
  //   "main_cat_name":"INDIAN ",
  //   "sub_cat_name":"INDIAN BREADS",
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

  // getOrderDetails(){
  //   this.foodieCallService.retrieveByKey(retrivedData).subscribe(
  //     (res: any) => {
       
  //     }
  // }

}
