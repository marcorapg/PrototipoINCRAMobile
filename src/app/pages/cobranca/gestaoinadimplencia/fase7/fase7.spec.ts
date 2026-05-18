import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase7 } from './fase7';

describe('Fase7', () => {
  let component: Fase7;
  let fixture: ComponentFixture<Fase7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
