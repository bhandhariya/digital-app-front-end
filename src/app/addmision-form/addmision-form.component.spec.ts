import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmisionFormComponent } from './addmision-form.component';

describe('AddmisionFormComponent', () => {
  let component: AddmisionFormComponent;
  let fixture: ComponentFixture<AddmisionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmisionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
