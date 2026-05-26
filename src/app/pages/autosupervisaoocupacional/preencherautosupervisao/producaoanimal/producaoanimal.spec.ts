import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producaoanimal } from './producaoanimal';

describe('Producaoanimal', () => {
  let component: Producaoanimal;
  let fixture: ComponentFixture<Producaoanimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Producaoanimal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Producaoanimal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
