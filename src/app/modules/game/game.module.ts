import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './components/field/field.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [FieldComponent],
  imports: [CommonModule, GameRoutingModule],
  providers: [],
})
export class GameModule {}
