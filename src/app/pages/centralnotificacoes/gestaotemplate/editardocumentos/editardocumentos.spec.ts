import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editardocumentos } from './editardocumentos';

describe('Editardocumentos', () => {
  let component: Editardocumentos;
  let fixture: ComponentFixture<Editardocumentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editardocumentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editardocumentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
