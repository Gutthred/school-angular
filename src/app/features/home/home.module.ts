import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
