import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FoodieApiService } from '../../Foodie-api-service';
import { BsModalRef,BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

  
  minDate = new Date();
  checked: boolean = false;
  @ViewChild('ref') ref;

  // ELEMENT_DATA ;
  searchText;
  backUpArray: any;
  modalRef: BsModalRef;
  ELEMENT_DATA ;
  Side_Menu_Data;
  item_data;
  item_data1;
  SearchMenu: any;
  menuFormGroup: FormGroup;
  outofstock;

  data : Date = new Date();
  settings={
  bigBanner: true,
  timePickker:true,
  format:'dd-MMM-yyyy hh:mm a',
  defaultOpen:false,
  closeOnSelect:false
}
  config: { leftTime: number; size: string; };
  testContent=1;
  IsmodelShow: boolean;

  // nostock = [

  //   {
  //     "MainCourse": "Quick Bites",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Pulav",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Rice Bath",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"veg"
  //         }
  //       ]
  //   },
  //   {
  //     "MainCourse": "Salads",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Veg Salad",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Non-Veg Salad",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"nonveg"
  //         }
  //       ]
  //   },
  //   {
  //     "MainCourse": "Soups",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Veg Soup",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Non-Veg Soup",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"nonveg"
  //         }
  //       ]
  //   },
  //   {
  //     "MainCourse": "Indian",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Rotii",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Curry",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"nonveg"
  //         }
  //       ]
  //   }
  // ];

  arrayOne(n: number): any[] {
    return Array(n);
  }

  
  constructor(private FoodieApiService: FoodieApiService,private modalService: BsModalService,private fb: FormBuilder,private router: Router) { 
    this.getOrderDetails();
    this.menuFormGroup = this.fb.group({
      'togle': [null]      
    });
   }

  ngOnInit() {
   

  }

  openModal(template: TemplateRef<any>, data?: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.item_data = data;
  }

  openModal1(template1: TemplateRef<any>, data?: any) {
    this.modalRef = this.modalService.show(template1, { class: 'modal-lg' });
    this.item_data1 = data;
    console.log(this.item_data1)
  }
  getOrderDetails(){
    var params={

    }
    this.FoodieApiService.retrieveMenuData(params).subscribe(
      (res:any) => {
        // console.log(JSON.stringify(res));
        this.ELEMENT_DATA = res;
        this.backUpArray = res;
        this.Side_Menu_Data = res;
        

        
  })
}


getOrderDetails1(){
  var params={

  }
  this.FoodieApiService.retrieveOutOfStockData(params).subscribe(
    (res:any) => {
      // console.log(JSON.stringify(res));
      this.outofstock = res;
      

      
})
}
modelDataSave(data){
  this.menuFormGroup.controls['togle'].setValue('true');
}
 
temp(data, s) {
  return data.filter(e => e.MainCourse.toLowerCase().includes(s) || e.MainCourse.includes(s))
      .sort((a,b) => a.MainCourse.includes(s) && !b.MainCourse.includes(s) ? -1 : b.MainCourse.includes(s) && !a.MainCourse.includes(s) ? 1 :0);
}

menuFilter() {

    // this.httpdatanew = this.filtradoService.applyFilter(this.cardDetails, this.searchText)
    let a = this.temp(this.ELEMENT_DATA, this.SearchMenu)
    // console.log(a);
    
    this.ELEMENT_DATA = a;
    if (this.SearchMenu == null || this.SearchMenu == "") {
      this.ELEMENT_DATA = this.backUpArray
    }

  }

  close() {
    this.modalRef.hide();
}

ofs()
{
  this.outofstock = []
   var params={

}
  if(this.ref._checked == true)
  {
    
    this.FoodieApiService.retrieveOutOfStockData(params).subscribe(
      (res:any) => {
        // console.log(JSON.stringify(res));
        // this.outofstock = res;
        
        this.ELEMENT_DATA = res;  
        // console.log(this.ELEMENT_DATA)
        
  })
 
  // console.log('onClick this.ref._checked '+ this.ref._checked);
  }
  if(this.ref._checked == false)
  {
    this.ELEMENT_DATA = []
    var params={

    }
    this.FoodieApiService.retrieveMenuData(params).subscribe(
      (res:any) => {
        // console.log(JSON.stringify(res));
        this.ELEMENT_DATA = res;
        this.backUpArray = res;
        this.Side_Menu_Data = res;       
  })
  }
}

addNewItem(){
  window.open("http://localhost:4200/#/menuDetails/menu");
}

search(data){
  console.log(data);
  }

}
