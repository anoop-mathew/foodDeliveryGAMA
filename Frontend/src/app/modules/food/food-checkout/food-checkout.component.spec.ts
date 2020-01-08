import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCheckoutComponent } from './food-checkout.component';

describe('FoodCheckoutComponent', () => {
  let component: FoodCheckoutComponent;
  let fixture: ComponentFixture<FoodCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
