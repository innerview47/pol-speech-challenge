import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../../_components/elements/side-nav/side-nav.component'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpeechService } from '../../_services/speech.service'
import { FormBase } from '../../_models/form-base'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-speech-page',
  templateUrl: './speech-page.component.html',
  styleUrls: ['./speech-page.component.css']
})
export class SpeechPageComponent implements OnInit {
  items = []
  speechId = 0
  crudType = "view"
  inputs$: Observable<FormBase<any>[]>

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private service: SpeechService
  ) {

    route.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      this.speechId = this.activatedRoute.snapshot.paramMap.get('id') ? parseInt(this.activatedRoute.snapshot.paramMap.get('id')) : 0
      this.activatedRoute.data.subscribe(d => {
         this.crudType = d.routeName || 'view'
         this.getFormConfig()
      })
    })

  }

  ngOnInit(): void {
    this.service.getSpeeches().subscribe(s => {
      this.items = s
    })
    this.getFormConfig()
  }

  getFormConfig () {
    if (this.crudType === 'create') {
      this.inputs$ = this.service.getAddForm()
    } else if (this.crudType === 'details') {
      let speechData = this.items.filter(i => i.id === this.speechId)[0]
      console.log(speechData)
      this.inputs$ = this.service.getUpdateForm(speechData)
    }
  }

  onSubmit (data) {
    if (this.crudType === 'create') {
      this.service.add(data)
      this.resetForm()
    } else if (this.crudType === 'details') {
      this.service.update(this.speechId, data)
    }
  }

  onDelete () {
    this.service.delete(this.speechId)
  }

  resetForm () {
    this.inputs$ = this.service.getAddForm()
  }

}
