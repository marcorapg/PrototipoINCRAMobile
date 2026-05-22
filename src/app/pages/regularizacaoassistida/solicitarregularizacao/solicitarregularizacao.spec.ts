import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitarregularizacao } from './solicitarregularizacao';

describe('Solicitarregularizacao', () => {
  let component: Solicitarregularizacao;
  let fixture: ComponentFixture<Solicitarregularizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitarregularizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitarregularizacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
