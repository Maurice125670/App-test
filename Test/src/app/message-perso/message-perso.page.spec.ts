import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagePersoPage } from './message-perso.page';

describe('MessagePersoPage', () => {
  let component: MessagePersoPage;
  let fixture: ComponentFixture<MessagePersoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
