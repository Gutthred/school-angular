import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremPageComponent } from './features/semana-dois/pages/pages.component';
import { Week4Component } from './features/semana-quatro/pages/week4/week4.component';
import { Week3Component } from './features/semana-tres/pages/week3/week3.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProjectsComponent } from './features/projects/pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects',
    component: HomeComponent,
  },
  {
    path: 'week2',
    component: LoremPageComponent,
  },
  {
    path: 'week3',
    component: Week3Component,
  },
  {
    path: 'week4',
    component: Week4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
