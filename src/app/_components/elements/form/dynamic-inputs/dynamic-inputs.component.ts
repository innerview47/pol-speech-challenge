import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../../../../_models/form-base';

@Component({
  selector: 'app-inputs',
  templateUrl: './dynamic-inputs.component.html',
  styleUrls: ['./dynamic-inputs.component.css']
})
export class DynamicInputsComponent implements OnInit {

  @Input() input: FormBase<string>
  @Input() form: FormGroup
  get isValid() {
    return this.form.controls[this.input.key].valid
  }
  constructor() { }

  ngOnInit(): void {
  }

}
