import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarnotificacao } from './visualizarnotificacao';

describe('Visualizarnotificacao', () => {
  let component: Visualizarnotificacao;
  let fixture: ComponentFixture<Visualizarnotificacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarnotificacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarnotificacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
