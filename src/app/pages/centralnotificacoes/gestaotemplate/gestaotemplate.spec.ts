import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaotemplate } from './gestaotemplate';

describe('Gestaotemplate', () => {
  let component: Gestaotemplate;
  let fixture: ComponentFixture<Gestaotemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaotemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaotemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
