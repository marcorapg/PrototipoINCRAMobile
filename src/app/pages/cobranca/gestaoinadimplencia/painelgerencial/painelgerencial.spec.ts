import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painelgerencial } from './painelgerencial';

describe('Painelgerencial', () => {
  let component: Painelgerencial;
  let fixture: ComponentFixture<Painelgerencial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Painelgerencial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Painelgerencial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
