import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingOrderComponent } from './preparing-order.component';

describe('PreparingOrderComponent', () => {
  let component: PreparingOrderComponent;
  let fixture: ComponentFixture<PreparingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
