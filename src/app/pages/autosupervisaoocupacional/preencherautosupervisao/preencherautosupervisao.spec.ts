import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preencherautosupervisao } from './preencherautosupervisao';

describe('Preencherautosupervisao', () => {
  let component: Preencherautosupervisao;
  let fixture: ComponentFixture<Preencherautosupervisao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preencherautosupervisao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preencherautosupervisao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
