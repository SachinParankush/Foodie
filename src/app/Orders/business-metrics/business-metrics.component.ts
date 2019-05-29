import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
var moment = require('moment');

@Component({
  selector: 'app-business-metrics',
  templateUrl: './business-metrics.component.html',
  styleUrls: ['./business-metrics.component.scss']
})
export class BusinessMetricsComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;
  a = ["Food Ready Correct","Food Ready Pressed Early"];
  dynamicClass1;
  dynamicClass2;
  dynamicClass3;
  dynamicClass4;
  dynamicClass5;
  dynamicClass6;
  dynamicClass7;
  date;

  now = moment().format('dddd');
  now1 = moment().subtract(1, 'days').format('dddd');
  now2 = moment().subtract(2, 'days').format('dddd');
  now3 = moment().subtract(3, 'days').format('dddd');
  now4 = moment().subtract(4, 'days').format('dddd');
  now5 = moment().subtract(5, 'days').format('dddd');
  now6 = moment().subtract(6, 'days').format('dddd');

  orderEdits = 10;
  cancelledOrders = 0;
  acceptedOrders = 90.65;
  goodFoodReady = 99;


  constructor() { 
    this.report(1)
   }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.a,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#0375A7", "#28C3D5"],
            data: [656, 533]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: ''
        }
      }
    });
  }

  report(index){
      if(index == 1){
        this.dynamicClass1 = 'active';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().format('ddd, DD MMM');
      }
      if(index == 2){
        this.dynamicClass2 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(1, 'days').format('ddd, DD MMM');
      }
      if(index == 3){
        this.dynamicClass3 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(2 ,'days').format('ddd, DD MMM');
      }
      if(index == 4){
        this.dynamicClass4 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(3, 'days').format('ddd, DD MMM');
      }
      if(index == 5){
        this.dynamicClass5 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(4, 'days').format('ddd, DD MMM');
      }
      if(index == 6){
        this.dynamicClass6 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(5, 'days').format('ddd, DD MMM');
      }
      if(index == 7){
        this.dynamicClass7 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.date = moment().subtract(6, 'days').format('ddd, DD MMM');
      }
  }

}
