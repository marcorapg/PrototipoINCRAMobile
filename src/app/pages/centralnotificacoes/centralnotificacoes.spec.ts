import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centralnotificacoes } from './centralnotificacoes';

describe('Centralnotificacoes', () => {
  let component: Centralnotificacoes;
  let fixture: ComponentFixture<Centralnotificacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Centralnotificacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Centralnotificacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
