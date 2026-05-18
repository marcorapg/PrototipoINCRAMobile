import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizarcaso } from './visualizarcaso';

describe('Visualizarcaso', () => {
  let component: Visualizarcaso;
  let fixture: ComponentFixture<Visualizarcaso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizarcaso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizarcaso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
