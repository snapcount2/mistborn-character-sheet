import { TestBed } from '@angular/core/testing';

import { ApplicationModeService } from './application-mode.service';

describe('ApplicationModeService', () => {
  let service: ApplicationModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
