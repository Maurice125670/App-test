import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupStepOnePage } from './signup-step-one.page';

describe('SignupStepOnePage', () => {
  let component: SignupStepOnePage;
  let fixture: ComponentFixture<SignupStepOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
