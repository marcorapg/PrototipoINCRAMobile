import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaoinadimplencia } from './gestaoinadimplencia';

describe('Gestaoinadimplencia', () => {
  let component: Gestaoinadimplencia;
  let fixture: ComponentFixture<Gestaoinadimplencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaoinadimplencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaoinadimplencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
