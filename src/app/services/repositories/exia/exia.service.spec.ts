import { TestBed } from '@angular/core/testing';

import { ExiaService } from './exia.service';

describe('ExiaService', () => {
  let service: ExiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
