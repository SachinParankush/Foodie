import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-taking',
  templateUrl: './order-taking.component.html',
  styleUrls: ['./order-taking.component.scss']
})
export class OrderTakingComponent implements OnInit {

  @ViewChild('Code') inputEl: ElementRef;

  Branches: any = ['Mysore', 'Bangalore'];
  Types: any = ['Call Center', 'Swiggy', 'Zomato', 'Uber Eats', 'Empire App', 'Web Order'];
  Payment: any = ['Online Payment', 'cash On Delivery'];
  orderTaking: FormGroup;
  private fieldArray: Array<any> = [];
  private newAttribute: any = {
    // "itemCode":"",
    // "itemName":"",
    // "itemRate": "0",
    // "quantity": 0, 
    // "amount":0 
  };

  itemDetails = [{
    "itemCode": "hkb",
    "itemName": "Empire Spl Chikn",
    "itemRate": "358"
  },
  {
    "itemCode": "gj",
    "itemName": "Grape Juse",
    "itemRate": "96"
  },
  {
    "itemCode": "jr",
    "itemName": "Jeera Rice",
    "itemRate": "256"
  },
  {
    "itemCode": "aj",
    "itemName": "Apple Juse",
    "itemRate": "110"
  }
  ]

  constructor(private fb: FormBuilder) {
    // this.orderTaking = this.fb.group({
    //   'itemCode': [null],
    //   'itemName': [null],
    //   'itemQuantity': [null],
    //   // 'displayQuantity': [null],
    //   'itemRate': [null],
    //   'itemAmount': [null],
    // });
  }

  ngOnInit() {
  }

  addFieldValue(data) {
    if (data == 0 || data == undefined || data == null) {
      this.newAttribute = {};
      this.inputEl.nativeElement.focus();
    }
    else {
      this.newAttribute['itemAmount'] = this.newAttribute.itemQuantity * this.newAttribute.itemRate;
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
      this.inputEl.nativeElement.focus();
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  selectItem(itemCode) {

    for (let i in this.itemDetails) {
      if (this.itemDetails[i].itemCode == itemCode) {
        this.newAttribute['itemName'] = this.itemDetails[i].itemName;
        this.newAttribute['itemQuantity'] = 0;
        this.newAttribute['itemRate'] = this.itemDetails[i].itemRate;
        this.newAttribute['itemAmount'] = 0;
      }
    }
  }

  amtCal(data, index) {
    if (data != 0) {
      this.newAttribute['itemAmount'] = this.newAttribute.itemQuantity * this.newAttribute.itemRate;
    }
    else {
      this.newAttribute = {}
      this.inputEl.nativeElement.focus();
    }
  }

  editCal(data) {

    for (let i in this.fieldArray) {
      if (this.fieldArray[i].itemCode == data.itemCode) {
        this.fieldArray[i].itemAmount = this.fieldArray[i].itemQuantity * this.fieldArray[i].itemRate;
      }
    }

  }

  editFieldValue(data, index) {
    // alert(index)
    if (data.itemQuantity == 0) {
      if (index > 0) {
        this.fieldArray.splice(index, 1);
        this.inputEl.nativeElement.focus();
      }
      else {
        this.fieldArray.shift();
        this.inputEl.nativeElement.focus();
      }
    }
  }


}
