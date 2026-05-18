import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase6 } from './fase6';

describe('Fase6', () => {
  let component: Fase6;
  let fixture: ComponentFixture<Fase6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
