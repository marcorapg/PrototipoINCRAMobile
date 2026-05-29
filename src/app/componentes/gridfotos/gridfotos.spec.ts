import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridfotos } from './gridfotos';

describe('Gridfotos', () => {
  let component: Gridfotos;
  let fixture: ComponentFixture<Gridfotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridfotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gridfotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
