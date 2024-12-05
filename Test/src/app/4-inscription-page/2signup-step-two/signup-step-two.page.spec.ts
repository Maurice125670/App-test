import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupStepTwoPage } from './signup-step-two.page';

describe('SignupStepTwoPage', () => {
  let component: SignupStepTwoPage;
  let fixture: ComponentFixture<SignupStepTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
