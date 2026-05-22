import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regularizacaoassistida } from './regularizacaoassistida';

describe('Regularizacaoassistida', () => {
  let component: Regularizacaoassistida;
  let fixture: ComponentFixture<Regularizacaoassistida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Regularizacaoassistida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Regularizacaoassistida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
