import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AuthenticatedComponent } from './pages/authenticated/authenticated.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AuthenticatedComponent
  ]
})
export class AuthenticatedModule { }
