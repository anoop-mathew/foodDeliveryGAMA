import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianComponent } from './indian.component';

describe('IndianComponent', () => {
  let component: IndianComponent;
  let fixture: ComponentFixture<IndianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndianComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
