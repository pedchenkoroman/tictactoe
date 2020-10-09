import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldComponent } from './components/field/field.component';

const routes: Routes = [
  {
    path: '',
    component: FieldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
