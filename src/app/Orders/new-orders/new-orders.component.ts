import { Component, OnInit, ɵConsole } from '@angular/core';
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
  config: any;
  status: any;
  audio = new Audio('../../../assets/music/bell.mp3');
  testContent = 15;
  infinityLoopCheck = true;
  orderCountJson = {
    "newOrderStatus":true,
    "newOrderCount":"0",
    "prepareOrderStatus":true,
    "prepareOrderCount":"0",
    "readyOrderStatus":true,
    "readyOrderCount":"0",
    "dispathOrderStatus":true,
    "dispathOrderCount":"0",
  }




  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private FoodieApiService: FoodieApiService, private FoodieAppState: AppState) {
    this.getOrderCount();
    this.getOrderDetails('new');
    
    // this.getNewOrders();
  }

  ngOnInit() {
    this.config = {
      leftTime: (this.testContent) * 60,
      size: 'large',
    };
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
      "user_id": this.FoodieAppState.globalLoginData.user_id,
      "bid": this.FoodieAppState.globalLoginData.bid
    }
    this.FoodieApiService.retrieveAll(params).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        this.cardDetails = res.data;
        this.orderDetails = res.data[0].order_details;
        this.backUpArray = res;
        this.orderNumber = res.data[0].bill_id;
        this.orderQuantity = res.data[0].total_item;
        this.orderTotal = res.data[0].total_amount;
        this.item_total = res.data[0].order_price;
        this.grand_total = res.data[0].total_amount;
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
  finishTest() {
    console.log("time over")
    this.audio.play();
  }

  getOrderData(status_Type) {
    this.menu_Status = status_Type;
    // this.orderDetails = "";
    // this.cardDetails = "";

    var params = {
      "user_id": this.FoodieAppState.globalLoginData.user_id,
      "bid": this.FoodieAppState.globalLoginData.bid,
      "status": status_Type
    }
    // alert("params" + JSON.stringify(params));
    this.FoodieApiService.getOrderData(params).subscribe(
      (res: any) => {
        console.log("getOrderData" + JSON.stringify(res));
        if (res.code == '200') {
          if (res.data.length == 0) {
            this.orderPresent = false;
            this.orderNumber = "";
            this.orderDetails = [];
            this.cardDetails = [];
          } else {
            this.orderPresent = true;
            this.cardDetails = res.data;
            this.orderDetails = res.data[0].order_details;
            this.backUpArray = res;
            this.orderNumber = res.data[0].bill_id;
            this.orderQuantity = res.data[0].total_item;
            this.orderTotal = res.data[0].total_amount;
            this.item_total = res.data[0].order_price;
            this.grand_total = res.data[0].total_amount;
          }
        }
      })
  }

  getOrderCount(){
    var params = {
      "user_id": this.FoodieAppState.globalLoginData.user_id,
      "bid": this.FoodieAppState.globalLoginData.bid
    }
    // alert("2225" + JSON.stringify(params));
    this.FoodieApiService.getOrderCount(params).subscribe(
      (res: any) => {
        alert("<<<newOrder>>>"+JSON.stringify(res.data.prepareOrder[0].count));
        if(res.code == '200'){
          if(res.data.newOrder[0].count != 0){
            this.orderCountJson.newOrderCount = res.data.newOrder[0].count;
            this.orderCountJson.newOrderStatus = false;
          } 
          if(res.data.prepareOrder[0].count != 0){
            this.orderCountJson.prepareOrderCount = res.data.prepareOrder[0].count;
            this.orderCountJson.prepareOrderStatus = false;
          }
          if(res.data.readyOrder[0].count != 0){
            this.orderCountJson.readyOrderCount = res.data.readyOrder[0].count;
            this.orderCountJson.readyOrderStatus = false;
          }
          if(res.data.dispathOrder[0].count != 0){
            this.orderCountJson.dispathOrderCount = res.data.dispathOrder[0].count;
            this.orderCountJson.dispathOrderStatus = false;
          }
          // else {
          //   this.orderCountJson.newOrderStatus = true;
          //   this.orderCountJson.prepareOrderStatus = true;
          //   this.orderCountJson.readyOrderStatus = true;
          //   this.orderCountJson.dispathOrderStatus = true;
          //   this.orderCountJson.newOrderCount = '0';
          //   this.orderCountJson.prepareOrderCount = '0';
          //   this.orderCountJson.readyOrderCount = '0';
          //   this.orderCountJson.dispathOrderCount = '0';
          // }
        }
      })
  }
  
  // Initiate infinite loop
  // getNewOrders(){
  //   while (1) {
  //     setTimeout(() => {
  //       console.log('timeout!');
  //   }, 6000);
  //   }
  // }
  
}
