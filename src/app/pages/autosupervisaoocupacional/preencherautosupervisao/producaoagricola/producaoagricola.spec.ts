import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producaoagricola } from './producaoagricola';

describe('Producaoagricola', () => {
  let component: Producaoagricola;
  let fixture: ComponentFixture<Producaoagricola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Producaoagricola]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Producaoagricola);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
