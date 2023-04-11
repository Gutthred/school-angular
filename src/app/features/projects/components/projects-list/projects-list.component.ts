import { Component } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Components and Module',
      description:
        'Utilização do CLI para criação de componentes e modulos, assim como deve ser a estruturação das pastas para manter a coesão em sua utilização, fazendo distinção entre shared e feature, o exercicío proposto foi criar dois parágrafos e um titulo.',
      features: ['Components', ' Module', ' HTML Semantics', ' CSS'],
      route: 'week2',
    },
    {
      id: 2,
      name: 'Data and Event binding',
      description:
        'Nesta ',
      features: ['Data binding', ' Event binding', ],
      route: 'week3',
    },
    {
      id: 3,
      name: 'Directives',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, voluptates error quos beatae consequatur expedita repellat reprehenderit, mollitia explicabo corporis dolor eveniet ratione molestiae nesciunt porro at odit. Est minus corrupti sunt voluptatum perferendis!',
      features: ['Components'],
      route: 'week4',
    },
    {
      id: 4,
      name: 'Pipe and Route',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, voluptates error quos beatae consequatur expedita repellat reprehenderit, mollitia explicabo corporis dolor eveniet ratione molestiae nesciunt porro at odit. Est minus corrupti sunt voluptatum perferendis!',
      features: ['Components'],
      route: 'home',
    },
  ];
}
