import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moradia } from './moradia';

describe('Moradia', () => {
  let component: Moradia;
  let fixture: ComponentFixture<Moradia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moradia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moradia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
