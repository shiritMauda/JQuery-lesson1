import { ValidatorFn } from '@angular/forms';

export type TInput = 'password' | 'text' | 'email' | 'date' | 'buttonGroup' | 'select';
export interface IListItem {
    label: any;
    value: any;
    color?: string;
}
export interface IInputConfig {
    label?: string;
    type: TInput;
    formControlName?: string;
    placeholder?: string;
    error?: string;
    value?: any;
    validators?: ValidatorFn[];
    list?: IListItem[];
}
