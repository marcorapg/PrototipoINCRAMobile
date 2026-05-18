import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarvariaveis } from './editarvariaveis';

describe('Editarvariaveis', () => {
  let component: Editarvariaveis;
  let fixture: ComponentFixture<Editarvariaveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editarvariaveis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editarvariaveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
