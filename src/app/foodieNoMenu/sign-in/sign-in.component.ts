import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUp: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.signUp = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
  }
  validatePage() {

    if (this.signUp.valid) {
      alert("login Successful")
      this.signUp.reset();
      this.router.navigate(['/foodie/BaseComponent']);
    } else {
      for (let c in this.signUp.controls) {
        this.signUp.controls[c].markAsTouched();
        this.signUp.controls[c].touched;
      }
    }

  }
 
}
