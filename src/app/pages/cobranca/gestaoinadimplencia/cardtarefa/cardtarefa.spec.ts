import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardtarefa } from './cardtarefa';

describe('Cardtarefa', () => {
  let component: Cardtarefa;
  let fixture: ComponentFixture<Cardtarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardtarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardtarefa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
