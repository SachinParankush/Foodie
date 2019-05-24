import { Component, OnInit, ɵConsole } from '@angular/core';
import { FoodieApiService } from '../../Foodie-api-service';
import { AppState } from '../../app.service';
import { Observable } from 'rxjs';

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
  package_charges;
  GST;
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
  newOrderCount = "0";
  prepareOrderCount = "0"
  readyOrderCount ="0";
  dispathOrderCount = "0";
  customer_Name;
  customer_No;
  delivery_Person_Name;
  delivery_Person_No;
  
  alive = true;

  constructor(private FoodieApiService: FoodieApiService, private FoodieAppState: AppState) {
    this.getOrderCount();
    this.getOrderDetails('new');
    Observable.timer(0,10000)
    .takeWhile(() => this.alive) // only fires when component is alive
    .subscribe(() => {
      var params = {
        "user_id": this.FoodieAppState.globalLoginData.user_id,
        "bid": this.FoodieAppState.globalLoginData.bid
      }
      this.FoodieApiService.getOrderCount(params).subscribe(
        (responce: any) => {
          if (responce.code == '200') {
            if (responce.data.newOrder[0].count != 0) {
              this.newOrderCount = responce.data.newOrder[0].count;
            }
            if (responce.data.prepareOrder[0].count != 0) {
              this.prepareOrderCount = responce.data.prepareOrder[0].count;
            }
            if (responce.data.readyOrder[0].count != 0) {
              this.readyOrderCount = responce.data.readyOrder[0].count;
            }
            if (responce.data.dispathOrder[0].count != 0) {
              this.dispathOrderCount = responce.data.dispathOrder[0].count;
            }
          }
        })
    });
  }

  ngOnInit() {
    this.config = {
      leftTime: (this.testContent) * 60,
      size: 'large',
    };
  }

  ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
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
        this.backUpArray = res.data;
        this.orderNumber = res.data[0].bill_id;
        this.orderQuantity = res.data[0].total_item;
        this.orderTotal = res.data[0].total_amount;
        this.item_total = res.data[0].order_price;
        this.grand_total = res.data[0].total_amount;
        this.customer_Name = res.data[0].customer_name;
        this.customer_No = res.data[0].customer_no;
        this.delivery_Person_Name = res.data[0].delivery_person_name;
        this.delivery_Person_No = res.data[0].delivery_person_no;
        this.package_charges = res.data[0].package_charge;
        this.GST = res.data[0].gst;
        this.getOrderCount();
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
      this.cardDetails = this.backUpArray;
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
    var params = {
      "user_id": this.FoodieAppState.globalLoginData.user_id,
      "bid": this.FoodieAppState.globalLoginData.bid,
      "status": status_Type
    }
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
            this.customer_Name = res.data[0].customer_name;
            this.customer_No = res.data[0].customer_no;
            this.delivery_Person_Name = res.data[0].delivery_person_name;
            this.delivery_Person_No = res.data[0].delivery_person_no;
            this.package_charges = res.data[0].package_charge;
            this.GST = res.data[0].gst;
            this.getOrderCount();            
          }
        }
      })
  }

  getOrderCount() {
    // this.orderCountJson = {
    //   "newOrderStatus": true,
    //   "newOrderCount": "0",
    //   "prepareOrderStatus": true,
    //   "prepareOrderCount": "0",
    //   "readyOrderStatus": true,
    //   "readyOrderCount": "0",
    //   "dispathOrderStatus": true,
    //   "dispathOrderCount": "0",
    // }
    var params = {
      "user_id": this.FoodieAppState.globalLoginData.user_id,
      "bid": this.FoodieAppState.globalLoginData.bid
    }
    this.FoodieApiService.getOrderCount(params).subscribe(
      (res: any) => {
        if (res.code == '200') {
          if (res.data.newOrder[0].count != 0) {
            this.newOrderCount = res.data.newOrder[0].count;
          }
          if (res.data.prepareOrder[0].count != 0) {
            this.prepareOrderCount = res.data.prepareOrder[0].count;
          }
          if (res.data.readyOrder[0].count != 0) {
            this.readyOrderCount = res.data.readyOrder[0].count;
          }
          if (res.data.dispathOrder[0].count != 0) {
            this.dispathOrderCount = res.data.dispathOrder[0].count;
          }
        }
      })
  }

  print() {
    let printContents, popupWin;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
    <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Foodie</title>

<style>
body{
	font-family:Arial, Helvetica, sans-serif;
	font-size:14px;	
}

.heading{
	font-size:18px;
	font-weight:bold;
	}
.gstin{
	font-size:16px;
	font-weight:bold;
	}
.total{
	font-size:18px;
	font-weight:bold;	
	}
	
</style>
</head>

<body onload="window.print();window.close()">

<table width="400" border="0">
  <tr>
    <td align="center" valign="middle">Foodie.....</td>
  </tr>
  <tr>
    <td align="center"><p class="heading">A unit of NKP Empire Ventures Pvt. Ltd.</p>
    <p>
    Damascus Street Next to Golden Fork Restaurant
P.O Box: 236963, Dubai
Ph: 04345711, 043457555</p>
<p class="gstin">GSTIN : 29AADCN9372N12M</p>
<hr /></td>
  </tr>
  
  <tr>
    <td>
    <table width="100%" border="0" cellspacing="0" cellpadding="5">
  <tr>
    <td>Bill No.</td>
    <td>:</td>
    <td>MSQ107&nbsp;</td>
  </tr>
  <tr>
    <td>Date</td>
    <td>:</td>
    <td>12-10-2017	| 12:45:20 </td>
  </tr>
  <tr>
    <td>Table No.</td>
    <td>:</td>
    <td>6</td>
  </tr>
  <tr>
    <td>Operator</td>
    <td>:</td>
    <td>Subhash</td>
  </tr>
  <tr>
    <td>Steward</td>
    <td>:</td>
    <td>Uday</td>
  </tr>
</table>

    
    </td>
  </tr>
  <tr>
    <td>
    <table width="100%" border="0" cellspacing="0" cellpadding="4">
      <tr>
        <td align="left" style="border-top:1px solid #999; border-bottom:1px solid #999;">Item Name</td>
        <td align="center" style="border-top:1px solid #999; border-bottom:1px solid #999;">QTY </td>
        <td align="center" style="border-top:1px solid #999; border-bottom:1px solid #999;">Price </td>
        <td align="center" style="border-top:1px solid #999; border-bottom:1px solid #999;">Amount&nbsp;</td>
      </tr>
      <tr> 
        <td align="left">Motton Tikka</td>
        <td align="center">1</td>
        <td align="center">150</td>
        <td align="center">150</td>
      </tr>
      <tr>
       <td align="left">Chicken Hydarabadi</td>
        <td align="center">1</td>
        <td align="center">150</td>
        <td align="center">150</td>
      </tr>
    </table>
    <hr/></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="3">
          <tr>
            <td align="left">Total Items&nbsp;</td>
            <td>:</td>
            <td align="left">`+ this.orderQuantity +`</td>
          </tr>
          
        </table></td>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="3">
          <tr>
            <td width="64%" align="right">Total </td>
            <td width="6%">:</td>
            <td width="30%" align="right">`+ this.item_total +`</td>
          </tr>
          <tr>
            <td align="right">Discount </td>
            <td>:</td>
            <td align="right">`+ this.discount +`</td>
          </tr>
          <tr>
            <td align="right">Parcel Charges </td>
            <td>:</td>
            <td align="right">`+ this.package_charges +`</td>
          </tr>
          <tr>
            <td align="right">GST</td>
            <td>:</td>
            <td align="right">`+ this.GST +`</td>
          </tr>
        </table></td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td align="right" class="total"><hr />
    Net Total : `+ this.grand_total +`
    <hr /></td>
  </tr>
  <tr>
    <td align="center">******************************************</td>
  </tr>
</table>
</body>
</html>  
    `
    );
    popupWin.document.close();
  }


}
