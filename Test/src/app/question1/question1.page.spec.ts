import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Question1Page } from './question1.page';

describe('Question1Page', () => {
  let component: Question1Page;
  let fixture: ComponentFixture<Question1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
