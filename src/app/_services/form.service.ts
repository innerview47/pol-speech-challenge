import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../_models/form-base';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  toFormGroup(inputs: FormBase<string>[] ) {
    const group: any = {};

    inputs.forEach(input => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required) : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }
}
