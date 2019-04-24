import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychitricDataComponent } from './psychitric-data.component';

describe('PsychitricDataComponent', () => {
  let component: PsychitricDataComponent;
  let fixture: ComponentFixture<PsychitricDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychitricDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychitricDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
