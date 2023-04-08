import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremComponent } from './components/lorem/lorem.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoremComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    LoremComponent
  ]
})
export class SemanaDoisModule { }
