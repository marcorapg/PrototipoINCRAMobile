import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase2 } from './fase2';

describe('Fase2', () => {
  let component: Fase2;
  let fixture: ComponentFixture<Fase2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
