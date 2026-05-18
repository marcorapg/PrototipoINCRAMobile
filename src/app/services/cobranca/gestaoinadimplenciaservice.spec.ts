import { TestBed } from '@angular/core/testing';

import { Gestaoinadimplenciaservice } from './gestaoinadimplenciaservice';

describe('Gestaoinadimplenciaservice', () => {
  let service: Gestaoinadimplenciaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gestaoinadimplenciaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
