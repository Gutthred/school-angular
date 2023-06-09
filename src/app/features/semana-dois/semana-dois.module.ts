import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremComponent } from './components/lorem/lorem.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoremPageComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    LoremComponent,
    LoremPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    LoremComponent,
    LoremPageComponent,
  ]
})
export class SemanaDoisModule { }
