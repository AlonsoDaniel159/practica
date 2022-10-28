import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interno01Component } from './components/interno01/interno01.component';
import { Interno02Component } from './components/interno02/interno02.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  {
    path: '',
    component: ServicioComponent
  },
  {
    path: 'interno01',
    component: Interno01Component
  },
  {
    path: 'interno02',
    component: Interno02Component
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
