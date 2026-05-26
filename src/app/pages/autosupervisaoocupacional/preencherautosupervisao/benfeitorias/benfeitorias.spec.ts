import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Benfeitorias } from './benfeitorias';

describe('Benfeitorias', () => {
  let component: Benfeitorias;
  let fixture: ComponentFixture<Benfeitorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Benfeitorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Benfeitorias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
