import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageheader } from './pageheader';

describe('Pageheader', () => {
  let component: Pageheader;
  let fixture: ComponentFixture<Pageheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pageheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pageheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
