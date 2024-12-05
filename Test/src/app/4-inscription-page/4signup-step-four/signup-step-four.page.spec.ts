import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupStepFourPage } from './signup-step-four.page';

describe('SignupStepFourPage', () => {
  let component: SignupStepFourPage;
  let fixture: ComponentFixture<SignupStepFourPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
