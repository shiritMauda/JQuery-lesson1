import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInputConfig } from './input.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() config: IInputConfig;
  control = new FormControl();
  public get currentValue() {
    return this.control.value;
  }
  constructor() { }

  onChangefn = (_) => _;
  writeValue(obj: any): void {
    this.control.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    // Override !!!
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void {

  } setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();

    }

  }

  ngOnInit() {
    this.control.valueChanges.pipe(
      map(val => {
        //console.log('valueCanges', val);

        this.onChangefn(val);
      })
    ).subscribe();
  }
  btnClick(value) {
    this.control.patchValue(value);
  }
}

