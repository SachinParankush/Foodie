import { Component, OnInit } from '@angular/core';
import { FoodieApiService } from '../../Foodie-api-service';

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
  
 



  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private FoodieApiService: FoodieApiService) { 
    this.getOrderDetails('new')
  }

  ngOnInit() {
  }

  showOrderDetails(orderid) {
    this.orderDetails = "";
    this.orderNumber = "";
    this.orderQuantity = "";
    this.orderTotal = "";
    this.item_total = 0;
    this.grand_total = 0;
    this.orderDetails = (orderid.order_details);
    this.orderNumber = orderid.bill_id;
    this.orderQuantity = orderid.total_item;
    this.orderTotal = orderid.total_amount;
    this.item_total = orderid.order_price;
    this.grand_total = orderid.total_amount;
    // alert(JSON.stringify(orderid.order_Details))
  }

  getOrderDetails(orderStatus){
    this.cardDetails = "";
    this.menu_Status = orderStatus;
    var params={

    }
    this.FoodieApiService.retrieveAll(params).subscribe(
      (res:any) => {
        console.log(JSON.stringify(res));
        this.cardDetails = res;
        this.backUpArray = res;
  })
}

temp(data, s) {
  return data.filter(e => e.hotel_location.includes(s) || e.order_id.includes(s))
      .sort((a,b) => a.hotel_location.includes(s) && !b.hotel_location.includes(s) ? -1 : b.hotel_location.includes(s) && !a.hotel_location.includes(s) ? 1 :0);
}

  prodFilter() {

    // this.httpdatanew = this.filtradoService.applyFilter(this.cardDetails, this.searchText)
    let a = this.temp(this.cardDetails, this.searchText)
    console.log(this.searchText);
    this.cardDetails = a;
    if (this.searchText == null || this.searchText == "") {
      this.cardDetails = this.backUpArray
    }

  }


}
