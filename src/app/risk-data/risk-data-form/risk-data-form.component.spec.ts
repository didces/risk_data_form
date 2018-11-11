import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDataFormComponent } from './risk-data-form.component';

describe('RiskDataFormComponent', () => {
  let component: RiskDataFormComponent;
  let fixture: ComponentFixture<RiskDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
