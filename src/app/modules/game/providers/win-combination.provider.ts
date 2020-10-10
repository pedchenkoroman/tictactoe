import { InjectionToken, Provider } from '@angular/core';
import { of } from 'rxjs';

export const WIN_COMBINATION = new InjectionToken(
  'Array of win combination array'
);

export const WIN_COMBINATION_PROVIDERS: Provider[] = [
  {
    provide: WIN_COMBINATION,
    useValue: of([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]),
  },
];
