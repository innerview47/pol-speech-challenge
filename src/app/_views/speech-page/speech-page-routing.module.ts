import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeechPageComponent } from './speech-page.component';
const routes: Routes = [
  { path: '', component: SpeechPageComponent },
  { path: 'create', component: SpeechPageComponent, data: { routeName: 'create' } },
  { path: ':id', component: SpeechPageComponent, data: { routeName: 'details' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechPageRoutingModule { }
