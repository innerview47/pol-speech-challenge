import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../../../_models/form-base';
import { FormService } from '../../../_services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ FormService ]
})
export class FormComponent implements OnInit {

  @Input() inputs: FormBase<string>[] = []
  @Input() actions: [] = []
  @Output() onSubmit: EventEmitter<any> = new EventEmitter()
  @Output() onDelete: EventEmitter<any> = new EventEmitter()
  form: FormGroup

  constructor(private formService: FormService) {  }

  ngOnInit() {
    this.form = this.formService.toFormGroup(this.inputs)
  }

  submitForm () {
    this.onSubmit.emit(this.form.getRawValue())
  }
  delete () {
    this.onDelete.emit('delete')
  }
}