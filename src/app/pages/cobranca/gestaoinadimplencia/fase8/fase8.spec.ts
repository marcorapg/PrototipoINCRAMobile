import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase8 } from './fase8';

describe('Fase8', () => {
  let component: Fase8;
  let fixture: ComponentFixture<Fase8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
