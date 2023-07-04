import { TestBed } from '@angular/core/testing';

import { SecurityguardService } from './securityguard.service';

describe('SecurityguardService', () => {
  let service: SecurityguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
