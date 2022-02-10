import { TestBed } from '@angular/core/testing';

import { PersonalCCService } from './personal-cc.service';

describe('PersonalCCService', () => {
  let service: PersonalCCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalCCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
