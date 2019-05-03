import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { foodieROUTES } from './foodie.routes';
import { foodieComponent } from './foodie.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { LayoutModule } from '../layout/layout.module';
// import { genericModule } from '../GeneralComponents/genericModule.module';
export const routes = [
  { path: '', component: foodieComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    foodieROUTES,
    LayoutModule,
    // genericModule
  ],
  declarations: [BaseComponentComponent, WelcomeComponentComponent],
    providers:[DatePipe]
})
export class foodieModule { 
  
}