import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterComponent } from './components/character/character.component';
import { MatCardModule } from '@angular/material/card';
import { Week4Component } from './pages/week4/week4.component';

@NgModule({
  declarations: [ProductsComponent, CharacterComponent, Week4Component],
  imports: [CommonModule, SharedModule, MatCardModule],
  exports: [ProductsComponent,Week4Component],
})
export class SemanaQuatroModule {}
