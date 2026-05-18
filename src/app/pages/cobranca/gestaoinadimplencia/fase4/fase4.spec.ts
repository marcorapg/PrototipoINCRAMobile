import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase4 } from './fase4';

describe('Fase4', () => {
  let component: Fase4;
  let fixture: ComponentFixture<Fase4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
