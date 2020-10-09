import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private playerService: PlayerService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  start(): void {
    this.playerService.updatePlayers(this.form.value);
  }
}
