import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class InputModule { }
