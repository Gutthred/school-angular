import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterComponent } from './components/character/character.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductsComponent, CharacterComponent],
  imports: [CommonModule, SharedModule, MatCardModule],
  exports: [ProductsComponent],
})
export class SellModule {}
