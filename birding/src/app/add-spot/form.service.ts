import { Injectable, Input } from '@angular/core';
import { IInputConfig, IListItem } from 'src/input/input.model';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  @Input() selectList: IListItem[];
  inputs: IInputConfig[] = [

    {
      formControlName: 'bird_name',
      label: 'שם ציפור ',
      type: 'text',
      error: 'שדה חובה',
      validators: [Validators.maxLength(10), Validators.minLength(2), Validators.required]
    },
    {
      formControlName: 'spot_date',
      label: 'תאריך צפייה',
      value: '',
      type: 'date',
      error: 'שדה חובה',
      validators: [Validators.required]
    },
           {
            formControlName: 'area',
            label: 'איזור',
            value: '',
            type: 'text',
            error: 'שדה חובה',
            validators: [Validators.required],
            list: this.selectList
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
