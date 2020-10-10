import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameActivateGuard implements CanActivate {
  constructor(private playerService: PlayerService) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.playerService.players$.pipe(
      map((players) => {
        return Object.values(players).every((val) => Boolean(val));
      })
    );
  }
}
