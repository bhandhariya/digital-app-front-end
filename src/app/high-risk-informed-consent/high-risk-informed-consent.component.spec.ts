import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiskInformedConsentComponent } from './high-risk-informed-consent.component';

describe('HighRiskInformedConsentComponent', () => {
  let component: HighRiskInformedConsentComponent;
  let fixture: ComponentFixture<HighRiskInformedConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighRiskInformedConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighRiskInformedConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
