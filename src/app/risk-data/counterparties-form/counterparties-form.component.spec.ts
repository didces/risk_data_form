import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartiesFormComponent } from './counterparties-form.component';

describe('CounterpartiesFormComponent', () => {
  let component: CounterpartiesFormComponent;
  let fixture: ComponentFixture<CounterpartiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterpartiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
