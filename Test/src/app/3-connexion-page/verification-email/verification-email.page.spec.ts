import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMdpOubliePage } from './page-mdp-oublie.page';

describe('PageMdpOubliePage', () => {
  let component: PageMdpOubliePage;
  let fixture: ComponentFixture<PageMdpOubliePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMdpOubliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
