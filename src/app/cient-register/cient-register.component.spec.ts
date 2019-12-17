import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CientRegisterComponent } from './cient-register.component';

describe('CientRegisterComponent', () => {
  let component: CientRegisterComponent;
  let fixture: ComponentFixture<CientRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CientRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
