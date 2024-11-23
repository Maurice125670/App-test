import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoodInputPage } from './mood-input.page';

describe('MoodInputPage', () => {
  let component: MoodInputPage;
  let fixture: ComponentFixture<MoodInputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
