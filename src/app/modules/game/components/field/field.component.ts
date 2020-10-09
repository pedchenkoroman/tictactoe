import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../../services/player.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.players$
      .asObservable()
      .subscribe((v) => console.log(123, v));
  }
}
