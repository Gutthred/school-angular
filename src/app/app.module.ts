import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresModule } from './features/colaboradores/colaboradores.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellModule } from './features/sell/sell.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ColaboradoresModule,
    BrowserAnimationsModule,
    SellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
