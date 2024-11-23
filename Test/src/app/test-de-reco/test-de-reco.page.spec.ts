import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDeRecoPage } from './test-de-reco.page';

describe('TestDeRecoPage', () => {
  let component: TestDeRecoPage;
  let fixture: ComponentFixture<TestDeRecoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDeRecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
