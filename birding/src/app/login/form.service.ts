import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IInputConfig } from 'src/input/input.model';
import { MyValidators } from 'src/input/input.validators';



@Injectable({
  providedIn: 'root'
})
export class FormService {
  inputs: IInputConfig[] = [
    {
      formControlName: 'email',
      label: 'אימייל',
      value: '',
      type: 'email',
      error: 'שדה חובה',
      validators: [Validators.required, Validators.email]
    },
    {
      formControlName: 'password',
      label: 'סיסמא',
      type: 'password',
      error: 'שדה חובה',
      validators: [Validators.required]
    }
  ];
  constructor(private fb: FormBuilder) { }
  getForm() {
    const form = this.fb.group({});
    this.inputs.forEach(i => {
      const control = this.fb.control(i.value, i.validators);
      form.addControl(i.formControlName, control);
    });
    return form;
  }
}

