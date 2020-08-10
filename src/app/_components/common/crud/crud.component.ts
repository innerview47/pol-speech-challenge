import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @Input() type: string
  @Input() content: string
  @Output() submit: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit () {
    console.log('hahaha')
    this.submit.emit(this.content)
  }



}
