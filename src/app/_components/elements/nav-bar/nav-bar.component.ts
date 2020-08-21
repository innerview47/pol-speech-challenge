import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from '../../../_models/form-base'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() searchInputs: FormBase<string>[] = []
  @Output() onSearch: EventEmitter<any> = new EventEmitter()
  @Output() onOpenModal: EventEmitter<any> = new EventEmitter()

  isCollapsed = true

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch (params) {
    this.onSearch.emit(params)
  }

  openModal () {
    this.onOpenModal.emit('open modal')
  }
 
}
