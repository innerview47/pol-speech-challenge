import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeechPageRoutingModule } from './speech-page-routing.module';
import { SharedModule } from '../../_modules/shared/shared.module';

import { SpeechPageComponent } from './speech-page.component';

@NgModule({
  declarations: [SpeechPageComponent],
  imports: [
    CommonModule,
    SpeechPageRoutingModule,
    SharedModule
  ]
})
export class SpeechPageModule { }
