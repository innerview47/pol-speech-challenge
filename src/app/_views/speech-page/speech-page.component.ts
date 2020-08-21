import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpeechService } from '../../_services/speech.service'
import { FormBase } from '../../_models/form-base'
import { Observable } from 'rxjs'
import { delay } from 'rxjs/operators'
import { Speech } from '../../_models/speech'

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
  searchInputs$: Observable<FormBase<any>[]>
  modalRef: BsModalRef
  isCollapsed = true
  filteredItems = []
  selectedItem: Speech

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
      this.filteredItems = s
    })
    this.getFormConfig()
  }

  set _speechId(value: number) {
    if (this.speechId !== value) {
      this.speechId = value
      this.selectedItem = this.items.filter(i => i.id === this.speechId)[0]
      this.getFormConfig()
    }
  }

  getFormConfig () {
    this.addInputs$ = this.service.getAddForm()
    this.inputs$ = this.service.getUpdateForm(this.selectedItem)
    this.searchInputs$ = this.service.getSearchForm()
  }

  onSubmit (data, type) {
    if (type === 'create') {
      this.service.add(data)
      this.addInputs$ = this.service.getAddForm()
    } else if (type === 'update') {
      this.service.update(this.speechId, data)
      alert('Speech Updated!')
    }
    this.modalRef.hide()
  }

  onDelete () {
    let proceed = confirm('Are you sure you want to delete this?')
    if (proceed) {
      this.service.delete(this.speechId)
      this.speechId = 0
      this.resetForm()
    }
  }

  onSearch (params) {
    this.filteredItems = this.items
    let filtered = []
    if (!this.isEmptyParams(params)) {
      this.filteredItems.map(fi => {
        let toPush = false
        Object.keys(params).map(key => {
          if (params[key]) {
            console.log(key, fi[key], params[key], fi[key].toLowerCase().indexOf(params[key].toLowerCase()))
            toPush = (fi.hasOwnProperty(key) && fi[key].toLowerCase().indexOf(params[key].toLowerCase()) > -1) ? true : false
          }
        })
        if (toPush) filtered.push(fi)
      })
      this.filteredItems = filtered
      let list = document.getElementById('list')
      list.scrollIntoView()
    }
  }

  onShare (e) {
    if (Object.keys(this.selectedItem).length) {
      window.location.href = `mailto:${e.target.email.value}+?subject=Speech&body=${this.selectedItem.content}`
    }
    return false
  }

  isEmptyParams (params) {
    for (let key in params) {
      if (params[key] !== null && params[key] != '') return false
    }
    return true
  }

  setSelectedItem (id) {
    this._speechId = id
  }

  resetForm () {
    this.inputs$ = this.service.getUpdateForm({})
  }

}
