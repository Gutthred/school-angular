import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SemanaDoisModule } from './features/semana-dois/semana-dois.module';
import { SemanaTresModule } from './features/semana-tres/semana-tres.module';
import { SemanaQuatroModule } from './features/semana-quatro/semana-quatro.module';
import { HomeModule } from './features/home/home.module';
import { ProjectsModule } from './features/projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SemanaDoisModule,
    SemanaTresModule,
    SemanaQuatroModule,
    HomeModule,
    ProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
