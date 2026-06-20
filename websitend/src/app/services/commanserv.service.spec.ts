import { TestBed } from '@angular/core/testing';

import { CommanservService } from './commanserv.service';

describe('CommanservService', () => {
  let service: CommanservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommanservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
