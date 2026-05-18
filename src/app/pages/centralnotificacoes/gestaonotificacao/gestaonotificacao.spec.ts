import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaonotificacao } from './gestaonotificacao';

describe('Gestaonotificacao', () => {
  let component: Gestaonotificacao;
  let fixture: ComponentFixture<Gestaonotificacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaonotificacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaonotificacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
