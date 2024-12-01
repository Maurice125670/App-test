import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdpOubliPage } from './mdp-oubli.page';

describe('MdpOubliPage', () => {
  let component: MdpOubliPage;
  let fixture: ComponentFixture<MdpOubliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpOubliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
