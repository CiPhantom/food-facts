import { TestBed } from '@angular/core/testing';

import { FoodfactService } from './foodfact.service';

describe('FoodfactService', () => {
  let service: FoodfactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodfactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
