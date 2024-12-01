import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDeConnexionPage } from './page-de-connexion.page';

describe('PageDeConnexionPage', () => {
  let component: PageDeConnexionPage;
  let fixture: ComponentFixture<PageDeConnexionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeConnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
