import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase5 } from './fase5';

describe('Fase5', () => {
  let component: Fase5;
  let fixture: ComponentFixture<Fase5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
