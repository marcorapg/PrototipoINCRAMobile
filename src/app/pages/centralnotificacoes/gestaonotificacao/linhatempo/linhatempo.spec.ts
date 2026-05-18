import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linhatempo } from './linhatempo';

describe('Linhatempo', () => {
  let component: Linhatempo;
  let fixture: ComponentFixture<Linhatempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linhatempo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linhatempo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
