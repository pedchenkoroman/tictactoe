import { InjectionToken, Provider } from '@angular/core';
import { of } from 'rxjs';

export const ROW = new InjectionToken('Array row with cell id');

export const ROW_PROVIDERS: Provider[] = [
  {
    provide: ROW,
    useValue: of([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  },
];
