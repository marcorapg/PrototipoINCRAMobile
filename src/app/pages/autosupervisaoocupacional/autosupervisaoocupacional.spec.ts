import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autosupervisaoocupacional } from './autosupervisaoocupacional';

describe('Autosupervisaoocupacional', () => {
  let component: Autosupervisaoocupacional;
  let fixture: ComponentFixture<Autosupervisaoocupacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autosupervisaoocupacional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autosupervisaoocupacional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
