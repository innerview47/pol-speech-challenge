import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
	@Input() items: Array<Object>
  @Input() selected: number
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  clicked (id) {
    this.onClick.emit(id)
  }

}
