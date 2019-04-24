import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrendataComponent } from './childrendata.component';

describe('ChildrendataComponent', () => {
  let component: ChildrendataComponent;
  let fixture: ComponentFixture<ChildrendataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrendataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrendataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
