import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Question2Page } from './question2.page';

describe('Question2Page', () => {
  let component: Question2Page;
  let fixture: ComponentFixture<Question2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
