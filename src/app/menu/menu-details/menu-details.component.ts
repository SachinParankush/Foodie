import { Component, OnInit, TemplateRef } from '@angular/core';
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

  // ELEMENT_DATA ;
  searchText;
  backUpArray: any;
  modalRef: BsModalRef;
  ELEMENT_DATA ;
  item_data;
  SearchMenu: any;
  menuFormGroup: FormGroup;

  data : Date = new Date();
  settings={
  bigBanner: true,
  timePickker:true,
  format:'dd-MMM-yyyy hh:mm a',
  defaultOpen:false,
  closeOnSelect:false
}

  //  = [

  //   {
  //     "MainCourse": "Quick Bites",
  //     "Subcourse":
  //       [
  //         {
  //           "item_name": "Pulav",
  //           "item_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "item_name": "Rice Bath",
  //           "item_price": "75",
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
  //           "item_name": "Veg Salad",
  //           "item_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "item_name": "Non-Veg Salad",
  //           "item_price": "75",
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
  //           "item_name": "Veg Soup",
  //           "item_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "item_name": "Non-Veg Soup",
  //           "item_price": "75",
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
  //           "item_name": "Rotii",
  //           "item_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "item_name": "Curry",
  //           "item_price": "75",
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

  getOrderDetails(){
    var params={

    }
    this.FoodieApiService.retrieveMenuData(params).subscribe(
      (res:any) => {
        console.log(JSON.stringify(res));
        this.ELEMENT_DATA = res;
        this.backUpArray = res;
  })
}
modelDataSave(){
  this.menuFormGroup.controls['togle'].setValue('true')
}

temp(data, s) {
  return data.filter(e => e.MainCourse.toLowerCase().includes(s) || e.MainCourse.includes(s))
      .sort((a,b) => a.MainCourse.includes(s) && !b.MainCourse.includes(s) ? -1 : b.MainCourse.includes(s) && !a.MainCourse.includes(s) ? 1 :0);
}

menuFilter() {

    // this.httpdatanew = this.filtradoService.applyFilter(this.cardDetails, this.searchText)
    let a = this.temp(this.ELEMENT_DATA, this.SearchMenu)
    console.log(a);
    
    this.ELEMENT_DATA = a;
    if (this.SearchMenu == null || this.SearchMenu == "") {
      this.ELEMENT_DATA = this.backUpArray
    }

  }


}
