import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase1 } from './fase1';

describe('Fase1', () => {
  let component: Fase1;
  let fixture: ComponentFixture<Fase1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
