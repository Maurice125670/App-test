import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDArriveePage } from './page-d-arrivee.page';

describe('PageDArriveePage', () => {
  let component: PageDArriveePage;
  let fixture: ComponentFixture<PageDArriveePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDArriveePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
