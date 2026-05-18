import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editartemplate } from './editartemplate';

describe('Editartemplate', () => {
  let component: Editartemplate;
  let fixture: ComponentFixture<Editartemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editartemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editartemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
