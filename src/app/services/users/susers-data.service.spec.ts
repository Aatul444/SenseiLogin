import { TestBed } from '@angular/core/testing';

import { SusersDataService } from './susers-data.service';

describe('SusersDataService', () => {
  let service: SusersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SusersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
