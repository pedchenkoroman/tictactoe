import { TestBed } from '@angular/core/testing';

import { GameActivateGuard } from './game-activate.guard';

describe('GameActivateGuard', () => {
  let guard: GameActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
