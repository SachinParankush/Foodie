import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

  ELEMENT_DATA = [

    {
      "MainCourse": "Quick Bites",
      "Subcourse":
        [
          {
            "item_name": "Pulav",
            "item_price": "55",
            "item_discription": "Its Made with Love",
            "item_category":"veg"
          },
          {
            "item_name": "Rice Bath",
            "item_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"veg"
          }
        ]
    },
    {
      "MainCourse": "Salads",
      "Subcourse":
        [
          {
            "item_name": "Veg Salad",
            "item_price": "55",
            "item_discription": "Its Made with Love",
            "item_category":"veg"
          },
          {
            "item_name": "Non-Veg Salad",
            "item_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"nonveg"
          }
        ]
    },
    {
      "MainCourse": "Soups",
      "Subcourse":
        [
          {
            "item_name": "Veg Soup",
            "item_price": "55",
            "item_discription": "Its Made with Love",
            "item_category":"veg"
          },
          {
            "item_name": "Non-Veg Soup",
            "item_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"nonveg"
          }
        ]
    },
    {
      "MainCourse": "Indian",
      "Subcourse":
        [
          {
            "item_name": "Rotii",
            "item_price": "55",
            "item_discription": "Its Made with Love",
            "item_category":"veg"
          },
          {
            "item_name": "Curry",
            "item_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"nonveg"
          }
        ]
    }
  ];

  arrayOne(n: number): any[] {
    return Array(n);
  }

  
  constructor() { }

  ngOnInit() {
  }

}
