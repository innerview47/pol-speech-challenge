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
  @Input() successMessage: [] = []
  @Output() onSubmit: EventEmitter<any> = new EventEmitter()
  @Output() onDelete: EventEmitter<any> = new EventEmitter()
  @Output() onSearch: EventEmitter<any> = new EventEmitter()
  @Output() onShare: EventEmitter<any> = new EventEmitter()

  submitted = false
  form: FormGroup

  constructor(private formService: FormService) {  }

  ngOnInit() {
    this.form = this.formService.toFormGroup(this.inputs)
  }

  submitForm () {
    this.submitted = true
    if (this.form.valid) {
      this.onSubmit.emit(this.form.getRawValue())
      setTimeout(() => {
        this.submitted = false
      }, 100)
    }
  }
  delete () {
    this.onDelete.emit('delete')
  }
  search () {
    this.onSearch.emit(this.form.getRawValue())
  }
  share () {
    this.onShare.emit('share')
  }
}