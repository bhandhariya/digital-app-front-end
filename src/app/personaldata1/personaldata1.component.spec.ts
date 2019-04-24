import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaldata1Component } from './personaldata1.component';

describe('Personaldata1Component', () => {
  let component: Personaldata1Component;
  let fixture: ComponentFixture<Personaldata1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Personaldata1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Personaldata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
