import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPrincipal } from './tela-principal';

describe('HomePage', () => {
  let component: TelaPrincipal;
  let fixture: ComponentFixture<TelaPrincipal>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TelaPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
