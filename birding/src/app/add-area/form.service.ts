import { Injectable } from '@angular/core';
import { IInputConfig } from 'src/input/input.model';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  inputs: IInputConfig[] = [

    {
      formControlName: 'name',
      label: 'שם ',
      value: '',
      type: 'text',
      error: 'שדה חובה',
      validators: [Validators.maxLength(10), Validators.minLength(2), Validators.required]
    },
    {
      formControlName: 'img',
      label: 'תמונה',
      value: '',
      type: 'text',
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
