import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { Week3Component } from './pages/week3/week3.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListagemComponent,
    Week3Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListagemComponent,
    Week3Component
  ]
})
export class SemanaTresModule { }
