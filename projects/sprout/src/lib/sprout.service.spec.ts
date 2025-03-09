import { TestBed } from '@angular/core/testing';

import { SproutService } from './sprout.service';

describe('SproutService', () => {
  let service: SproutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
