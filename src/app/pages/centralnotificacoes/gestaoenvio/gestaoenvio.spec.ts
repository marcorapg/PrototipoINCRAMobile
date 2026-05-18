import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaoenvio } from './gestaoenvio';

describe('Gestaoenvio', () => {
  let component: Gestaoenvio;
  let fixture: ComponentFixture<Gestaoenvio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaoenvio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaoenvio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
