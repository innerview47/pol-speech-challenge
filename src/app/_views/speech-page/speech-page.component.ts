import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpeechService } from '../../_services/speech.service'
import { FormBase } from '../../_models/form-base'
import { Observable } from 'rxjs'

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-speech-page',
  templateUrl: './speech-page.component.html',
  styleUrls: ['./speech-page.component.css']
})
export class SpeechPageComponent implements OnInit {
  items = []
  speechId = 0
  inputs$: Observable<FormBase<any>[]>
  addInputs$: Observable<FormBase<any>[]>
  modalRef: BsModalRef

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private service: SpeechService,
    private modalService: BsModalService
  ) {
    this.getFormConfig()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

  ngOnInit(): void {
    this.service.getSpeeches().subscribe(s => {
      this.items = s
    })
    this.getFormConfig()
  }

  set _speechId(value: number) {
    if (this.speechId !== value) {
      this.speechId = value
    }
  }

  getFormConfig () {
    let speechData = this.items.filter(i => i.id === this.speechId)[0]
    this.addInputs$ = this.service.getAddForm()
    this.inputs$ = this.service.getUpdateForm(speechData)
  }

  onSubmit (data, type) {
    if (type === 'create') {
      this.service.add(data)
      this.resetForm()
    } else if (type === 'update') {
      this.service.update(this.speechId, data)
    }
  }

  onDelete () {
    this.service.delete(this.speechId)
  }

  setSelectedItem () {
    this._speechId = this.activatedRoute.snapshot.paramMap.get('id') ? parseInt(this.activatedRoute.snapshot.paramMap.get('id')) : 0
  }

  resetForm () {
    this.inputs$ = this.service.getAddForm()
  }

}
