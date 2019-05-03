import { Routes, RouterModule }  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { foodieNoMenu } from './foodieNoMenu.component';

const foodieNoMenu: Routes = [  
            { path: '', redirectTo: 'signIn', pathMatch: 'full' },
            // { path: 'BaseComponent', component:BaseComponentComponent},
            {path:'signUp', component:SignupComponent},
            {path:'signIn', component:SignInComponent},
            // Not found
            { path: '**', redirectTo: 'signIn' }

];

export const foodieMenu = RouterModule.forChild(foodieNoMenu);
  