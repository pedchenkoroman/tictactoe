import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './components/field/field.component';
import { GameRoutingModule } from './game-routing.module';
import { RowComponent } from './components/row/row.component';
import { CellComponent } from './components/cell/cell.component';
import { RepeatCellDirective } from './directives/repeat-cell.directive';

@NgModule({
  declarations: [
    FieldComponent,
    RowComponent,
    CellComponent,
    RepeatCellDirective,
  ],
  imports: [CommonModule, GameRoutingModule],
  providers: [],
})
export class GameModule {}
