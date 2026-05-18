import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarenvio } from './visualizarenvio';

describe('Visualizarenvio', () => {
  let component: Visualizarenvio;
  let fixture: ComponentFixture<Visualizarenvio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarenvio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarenvio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
