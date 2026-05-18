import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processamentolote } from './processamentolote';

describe('Processamentolote', () => {
  let component: Processamentolote;
  let fixture: ComponentFixture<Processamentolote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Processamentolote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Processamentolote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
