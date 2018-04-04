import { TestBed, inject } from '@angular/core/testing';

import { WellApplicationService } from './well-application.service';

describe('WellApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WellApplicationService]
    });
  });

  it('should be created', inject([WellApplicationService], (service: WellApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
