import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppState } from './app.service';
import { FoodieApiService } from './Foodie-api-service';


@NgModule({
    imports: [
    ],
    providers: [
    ],
    declarations: [
    ],
    exports: [
    ]
})

export class AppStateModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppStateModule,
            providers: [AppState,FoodieApiService]
        }
    }
}