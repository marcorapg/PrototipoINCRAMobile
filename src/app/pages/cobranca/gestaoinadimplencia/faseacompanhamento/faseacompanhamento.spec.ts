import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faseacompanhamento } from './faseacompanhamento';

describe('Faseacompanhamento', () => {
  let component: Faseacompanhamento;
  let fixture: ComponentFixture<Faseacompanhamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faseacompanhamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faseacompanhamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
