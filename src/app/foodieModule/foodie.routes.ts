import { Routes, RouterModule }  from '@angular/router';
import { foodieComponent } from './foodie.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { LayoutComponent } from '../layout/layout.component';

const foodieRoutes: Routes = [     
            { path: '', component: LayoutComponent, canActivate: [], children: [    
            { path: '', redirectTo: 'BaseComponent', pathMatch: 'full' },
            { path: 'BaseComponent', component:BaseComponentComponent},
            { path: 'Welcome', component:WelcomeComponentComponent},

            // Not found
            { path: '**', redirectTo: 'BaseComponent' }    
    ]
} 

];

export const foodieROUTES = RouterModule.forChild(foodieRoutes);
  