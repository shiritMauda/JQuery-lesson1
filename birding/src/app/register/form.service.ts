import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IInputConfig } from 'src/input/input.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  inputs: IInputConfig[] = [

    {
      formControlName: 'first_name',
      label: 'שם פרטי',
      value: '',
      type: 'text',
      error: 'שדה חובה',
      validators: [Validators.maxLength(10), Validators.minLength(2), Validators.required]
    },
    {
      formControlName: 'last_name',
      label: 'שם משפחה',
      value: '',
      type: 'text',
      error: 'שדה חובה',
      validators: [Validators.maxLength(10), Validators.minLength(2), Validators.required]
    },
    {
      formControlName: 'email',
      label: 'אימייל',
      value: '',
      type: 'email',
      error: 'שדה חובה',
      validators: [Validators.email, Validators.required]
    },
    {
      formControlName: 'phone',
      label: 'פלאפון',
      value: '',
      type: 'text',
      error: 'שדה חובה',
      validators: [ Validators.required]
    },
    {
      formControlName: 'password',
      label: 'סיסמא',
      type: 'password',
      error: 'שדה חובה',
      validators: [ Validators.minLength(5), Validators.required]
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
