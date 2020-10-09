import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  readonly players$: ReplaySubject<any> = new ReplaySubject(1);

  constructor() {}

  updatePlayers(val): void {
    this.players$.next(val);
  }
}
