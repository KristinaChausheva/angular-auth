import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUppageComponent } from './sign-uppage.component';

describe('SignUppageComponent', () => {
  let component: SignUppageComponent;
  let fixture: ComponentFixture<SignUppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
