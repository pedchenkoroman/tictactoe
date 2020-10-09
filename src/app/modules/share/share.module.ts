import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ShareModule {}
