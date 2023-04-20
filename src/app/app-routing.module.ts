import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremPageComponent } from './features/semana-dois/pages/pages.component';
import { Week4Component } from './features/semana-quatro/pages/week4/week4.component';
import { Week3Component } from './features/semana-tres/pages/week3/week3.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProjectsComponent } from './features/projects/pages/projects/projects.component';
import { LoginComponent } from './features/semana-sete/login/pages/login/login.component';
import { AuthenticatedComponent } from './features/semana-sete/authenticated/pages/authenticated/authenticated.component';
import { AuthGuard } from './shared/guards/guard/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
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
    path: 'projects/week2',
    component: LoremPageComponent,
  },
  {
    path: 'projects/week3',
    component: Week3Component,
  },
  {
    path: 'projects/week4',
    component: Week4Component,
  },
  {
    path: 'projects/week7/login',
    component: LoginComponent,
  },
  {
    path: 'projects/week7/gold-pot',
    component: AuthenticatedComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
