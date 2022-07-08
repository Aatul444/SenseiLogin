import { TestBed } from '@angular/core/testing';

import { UnSavedChangesGuardGuard } from './un-saved-changes-guard.guard';

describe('UnSavedChangesGuardGuard', () => {
  let guard: UnSavedChangesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnSavedChangesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
