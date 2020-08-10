import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs'

import { TextArea } from '../_models/form/types/textarea'
import { TextBox } from '../_models/form/types/textbox'
import { FormBase } from '../_models/form-base'

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private speeches = new BehaviorSubject<any[]>([])

  constructor() { }

  add (data) {
    let id = this.autoIncrement()
    data = {...data, ...{'id': id}}
    this.speeches.next(this.speeches.getValue().concat([data]))
  }

  getSpeeches(): Observable<any> {
    return this.speeches.asObservable()
  }

  update (id, data) {
    let currentSpeeches = []
    this.speeches.subscribe(s => {
      currentSpeeches = s
    })
    data = {...{'id': id}, ...data}
    currentSpeeches = currentSpeeches.map(speech => {
        if (speech.id === id) {
          speech = data
        }
        return speech
      })
    this.speeches.next(currentSpeeches)
  }

  autoIncrement () {
    let id = 0
    this.speeches.subscribe(s => {
      id = s.length ? (s[s.length - 1].id) + 1 : 1
    })
    return id
  }

  delete (id) {
    let currentSpeeches = []
    this.speeches.subscribe(s => {
      currentSpeeches = s
    })
    currentSpeeches = currentSpeeches.filter(cs => cs.id !== id)
    this.speeches.next(currentSpeeches)
  }

  getAddForm () {
    const inputs: FormBase<string>[] = [

      new TextArea({
        key: 'content',
        label: 'Content',
        value: '',
        required: true,
        type: 'text',
        order: 2,
        containerClass: 'col-md-12'
      }),

      new TextBox({
        key: 'name',
        label: 'Title',
        value: '',
        required: true,
        type: 'text',
        order: 1,
        containerClass: 'col-md-12'
      }),

      new TextBox({
        key: 'author',
        label: 'Author',
        value: '',
        required: true,
        type: 'text',
        order: 3,
        containerClass: 'col-md-12'
      }),

      new TextBox({
        key: 'keywords',
        label: 'Keywords',
        value: '',
        required: true,
        type: 'text',
        order: 4,
        containerClass: 'col-md-6'
      }),

      new TextBox({
        key: 'speech_date',
        label: 'Date of Speech',
        value: '',
        required: true,
        type: 'date',
        order: 5,
        containerClass: 'col-md-6'
      })
    ]
    console.log(inputs)
    return of(inputs.sort((a,b) => a.order - b.order))
  }

  getUpdateForm (data) {
    if (data) {
      let inputs = this.getAddForm()

      inputs.subscribe(inps => {
        console.log(inps, data, 'asd')
        inps.map(i => {
          Object.keys(data).map(key => {
            if (i.key === key) {
              i.value = data[key]
            }
          })
        })
      })
      return inputs
    }
  }
}
