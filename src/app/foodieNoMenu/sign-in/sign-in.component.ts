import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodieApiService } from '../../Foodie-api-service';
import { AppState } from '../../app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUp: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private FoodieApiService: FoodieApiService, private FoodieAppState: AppState) {
    this.signUp = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }
  validatePage() {

    if (this.signUp.valid) {
      var params = {
        "mail_id": this.signUp.value.email,
        "password": this.signUp.value.password,
      }
      this.FoodieApiService.signIn(params).subscribe(
        (res: any) => {  
          if (res.code == '200') {
            if(res.no_org == 1 )
            {

              this.FoodieApiService.retrieveOutletData(params).subscribe(
                (resp: any) => {
                  alert("--------->>>" + JSON.stringify(resp))
                  this.FoodieAppState.outLetArray = resp;
                  alert("2"+JSON.stringify(this.FoodieAppState.outLetArray))
                })
             
            this.FoodieAppState.globalLoginData.bid = res.data[0].bid;
            this.FoodieAppState.globalLoginData.brand_name = res.data[0].brand_name;
            this.FoodieAppState.globalLoginData.organisation_name = res.data[0].organisation_name;
            this.FoodieAppState.globalLoginData.user_id = res.data[0].user_id;
            this.FoodieAppState.globalLoginData.no_org = res.no_org;
            localStorage.setItem('brand_name', this.FoodieAppState.globalLoginData.brand_name);
            localStorage.setItem('organisation_name', this.FoodieAppState.globalLoginData.organisation_name);
            localStorage.setItem('bid', this.FoodieAppState.globalLoginData.bid);
            localStorage.setItem('user_id', this.FoodieAppState.globalLoginData.user_id);
            localStorage.setItem('no_org', this.FoodieAppState.globalLoginData.no_org);
            this.router.navigate(['/orders/NewOrders']);
            }
            else if(res.no_org >  1  &&  res.no_org  !=  0  )
            {
              // this.router.navigate(['/routesNoMenu/brandSelect']);
            }
            
          }
        })
    } else {
      for (let c in this.signUp.controls) {
        this.signUp.controls[c].markAsTouched();
        this.signUp.controls[c].touched;
      }
    }

  }

}
