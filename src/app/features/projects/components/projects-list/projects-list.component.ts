import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  project: Project[] = [];

  constructor(private projectService: ProjectService){
   this.project = projectService.getProjects()
  }
}
