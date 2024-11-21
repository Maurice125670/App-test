import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargementPage } from './chargement.page';

describe('ChargementPage', () => {
  let component: ChargementPage;
  let fixture: ComponentFixture<ChargementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
