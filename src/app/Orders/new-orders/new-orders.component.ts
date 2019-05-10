import { Component, OnInit } from '@angular/core';
import { FoodieApiService } from '../../Foodie-api-service';
import { AppState } from '../../app.service';

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
  cardDetails: any;
  menu_Status: any;
  searchText: any;
  backUpArray: any;
  orderId: any;





  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private FoodieApiService: FoodieApiService, private FoodieAppState: AppState) {
    this.getOrderDetails('new')
  }

  ngOnInit() {
  }

  showOrderDetails(orderData) {
    this.orderDetails = "";
    this.orderNumber = "";
    this.orderQuantity = "";
    this.orderTotal = "";
    this.item_total = 0;
    this.grand_total = 0;
    this.orderDetails = (orderData.order_details);
    this.orderNumber = orderData.bill_id;
    this.orderQuantity = orderData.total_item;
    this.orderTotal = orderData.total_amount;
    this.item_total = orderData.order_price;
    this.grand_total = orderData.total_amount;
    this.orderId = orderData.order_id;
    // alert(JSON.stringify(orderid.order_Details))
  }

  getOrderDetails(orderStatus) {
    this.cardDetails = "";
    this.menu_Status = orderStatus;
    var params = {

    }
    this.FoodieApiService.retrieveAll(params).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        this.cardDetails = res;
        this.orderDetails = res[0].order_details;
        this.backUpArray = res;
        this.orderNumber = res[0].bill_id;
        this.orderQuantity = res[0].total_item;
        this.orderTotal = res[0].total_amount;
        this.item_total = res[0].order_price;
        this.grand_total = res[0].total_amount;
      })
  }

  temp(data, s) {
    return data.filter(e => e.hotel_location.toLowerCase().includes(s) || e.order_id.toLowerCase().includes(s) || e.hotel_location.includes(s) || e.order_id.includes(s))
      .sort((a, b) => a.hotel_location.includes(s) && !b.hotel_location.includes(s) ? -1 : b.hotel_location.includes(s) && !a.hotel_location.includes(s) ? 1 : 0);
  }

  prodFilter() {
    let a = this.temp(this.cardDetails, this.searchText)
    console.log(this.searchText);
    this.cardDetails = a;
    if (this.searchText == null || this.searchText == "") {
      this.cardDetails = this.backUpArray
    }
  }

  orderStatus(status) {
    var params = {
      "user_id": this.FoodieAppState.globalLoginData.user_id,
      "bid": this.FoodieAppState.globalLoginData.bid,
      "order_id": this.orderId,
      "status": status
    }
    console.log("Status params....>>>" + JSON.stringify(params));
    this.FoodieApiService.orderStatusChange(params).subscribe(
      (res: any) => {        
        console.log("Status Responce....>>>" + JSON.stringify(res));
        this.getOrderDetails('new')
      })
  }
}
