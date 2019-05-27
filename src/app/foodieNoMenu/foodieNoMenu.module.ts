import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { foodieMenu } from './foodieNoMenu.routes';
import { foodieNoMenu } from './foodieNoMenu.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrandSelectComponent } from './brand-select/brand-select.component';

export const routes = [
  { path: '', component: foodieNoMenu, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    foodieMenu,
  ],
  declarations: [SignupComponent, SignInComponent, BrandSelectComponent],
    providers:[DatePipe]
})
export class foodieNoModule { 
  
}