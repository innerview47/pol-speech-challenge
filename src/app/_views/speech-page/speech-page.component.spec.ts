import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechPageComponent } from './speech-page.component';

describe('SpeechPageComponent', () => {
  let component: SpeechPageComponent;
  let fixture: ComponentFixture<SpeechPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
