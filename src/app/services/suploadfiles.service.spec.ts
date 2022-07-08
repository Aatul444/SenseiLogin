import { TestBed } from '@angular/core/testing';

import { SuploadfilesService } from './suploadfiles.service';

describe('SuploadfilesService', () => {
  let service: SuploadfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuploadfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
