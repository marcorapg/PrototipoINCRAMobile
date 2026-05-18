import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase3 } from './fase3';

describe('Fase3', () => {
  let component: Fase3;
  let fixture: ComponentFixture<Fase3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
