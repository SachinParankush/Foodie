import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-taking',
  templateUrl: './order-taking.component.html',
  styleUrls: ['./order-taking.component.scss']
})
export class OrderTakingComponent implements OnInit {

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
    "itemCode":"hkb",
    "itemName":"Empire Spl Chikn",
    "itemRate":"358"
  },
  {
    "itemCode":"gj",
    "itemName":"Grape Juse",
    "itemRate":"96"
  },
  {
    "itemCode":"jr",
    "itemName":"Jeera Rice",
    "itemRate":"256"
  },
  {
    "itemCode":"aj",
    "itemName":"Apple Juse",
    "itemRate":"110"
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

  addFieldValue(data,index) {
    
    if (data > 0) {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
    }
    else {
      this.newAttribute['itemName'] = "";
        this.newAttribute['itemQuantity'] = "";
        this.newAttribute['itemRate'] = "";
        this.newAttribute['itemAmount'] = "";
      if(index){        
        this.fieldArray.splice(index, 1);
      }      
    }

  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  selectItem(itemCode){
     
    for(let i in this.itemDetails)
    {
      if(this.itemDetails[i].itemCode == itemCode){       
        // this.newAttribute['itemCode'] = this.orderTaking.value.itemCode;
        this.newAttribute['itemName'] = this.itemDetails[i].itemName;
        this.newAttribute['itemQuantity'] = 0;
        this.newAttribute['itemRate'] = this.itemDetails[i].itemRate;
        this.newAttribute['itemAmount'] = 0;
        alert()
      }
    }
    // alert(JSON.stringify(this.newAttribute));
  }

}
