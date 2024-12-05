import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupStepThreePage } from './signup-step-three.page';

describe('SignupStepThreePage', () => {
  let component: SignupStepThreePage;
  let fixture: ComponentFixture<SignupStepThreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
