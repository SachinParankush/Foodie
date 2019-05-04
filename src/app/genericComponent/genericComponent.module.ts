
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, SkipSelf } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators, FormControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Optional } from '@angular/core';
// import { throwIfAlreadyLoaded } from './core/module-import-guard.ts';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { OrderCardComponent } from './order-card/order-card.component';

@NgModule({
    declarations: [
    OrderCardComponent
    ],
    imports: [        
        CommonModule,
        FormsModule,
        Ng2TableModule,
        SharedModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        RouterModule,
        NgbPaginationModule,
        NgbAlertModule,
        NgbModule.forRoot(),
    ],
    exports: [
        OrderCardComponent
    ]
})

export class genericModule { 
  
}