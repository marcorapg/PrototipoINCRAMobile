import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase9 } from './fase9';

describe('Fase9', () => {
  let component: Fase9;
  let fixture: ComponentFixture<Fase9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
