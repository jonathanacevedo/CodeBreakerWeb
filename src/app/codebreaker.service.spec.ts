import { TestBed, inject } from '@angular/core/testing';

import { CodebreakerService } from './codebreaker.service';

describe('CodebreakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodebreakerService]
    });
  });

  it('should be created', inject([CodebreakerService], (service: CodebreakerService) => {
    expect(service).toBeTruthy();
  }));
});
