import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/speeches', pathMatch: 'full' },
      { path: 'speeches', loadChildren:()=>import('./_views/speech-page/speech-page.module').then(m=>m.SpeechPageModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }