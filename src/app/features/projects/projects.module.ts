import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsItemComponent } from './components/projects-item/projects-item.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectsItemComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    ProjectsComponent
  ]
})
export class ProjectsModule { }
