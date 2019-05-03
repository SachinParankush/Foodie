import { Routes, RouterModule } from '@angular/router';



export const ROUTES: Routes = [
  
  { path: '', redirectTo: 'routesNoMenu', pathMatch: 'full' },
  { path: 'foodie', loadChildren: './foodieModule/foodie.module#foodieModule' },
  { path: 'routesNoMenu', loadChildren: './foodieNoMenu/foodieNoMenu.module#foodieNoModule' },
  // Not found
  { path: '**', redirectTo: 'routesNoMenu' }
];