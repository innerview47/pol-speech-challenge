import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
	@Input() items: Array<Object>
  @Input() selected: number
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  returnedItems: Array<Object>
  itemsPerPage: number = 5

  constructor() { }

  ngOnInit(): void {
    this.returnedItems = this.items.slice(0, this.itemsPerPage)
  }

  ngOnChanges() {
    this.returnedItems = this.items.slice(0, this.itemsPerPage)
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedItems = this.items.slice(startItem, endItem);
  }

  clicked (id) {
    this.onClick.emit(id)
    let content = document.getElementById('content')
    content.scrollIntoView()
  }

}
