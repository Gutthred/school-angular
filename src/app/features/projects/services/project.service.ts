import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Components and Module',
      description:
        'Utilização do CLI para criação de componentes e modulos, assim como deve ser a estruturação das pastas para manter a coesão em sua utilização, fazendo distinção entre shared e feature, o exercicío proposto foi criar dois parágrafos e um titulo.',
      features: ['Components', ' Module', ' HTML Semantics', ' CSS'],
      route: 'projects/week2',
    },
    {
      id: 2,
      name: 'Data and Event binding',
      description:
        'Data binding é a comunicação entre a VIEW e a LÓGICA, onde é possível realizar interpolação de STRINGS , quanto ao Event binding, podemos atrelar uma ação por exemplo de click em uma TAG com uma ação no componente, nesta aula foi solicitado que realizassemos a listassemos uma relação de pessoas, onde esses dados seriam disponibilizados através de interpolação.',
      features: ['Data binding', ' Event binding', ' Interpolation', ' HTML'],
      route: 'projects/week3',
    },
    {
      id: 3,
      name: 'Directives',
      description:
        'Diretivas são dividas em três categorias: Component, Attribute e Structural; foi solicitado a utilização das diretivas estruturais e de atributos para reduzir o hardcode, a estrutura de laço foi utilizada renderizando os componentes de acordo com a quantidade de objetos em um array, assim como a renderização condicional estabelecida pelo ngIf',
      features: ['Component', ' Attribute', ' Structural Diretives'],
      route: 'projects/week4',
    },
    {
      id: 4,
      name: 'Pipe and Route',
      description:
        'Esta aplicação onde você está, utilizou de pipes e routes para definir as rotas a serem seguidas, assim como a formatação dos textos e número.',
      features: ['Pipes', ' Routes', 'LazyLoad'],
      route: 'home',
    },
    {
      id: 5,
      name: 'Services, Template Driven and Guard',
      description:
        'O exercício proposto foi da criação de uma service para manutenção dos dados a serem distribuídos, seguindo o conceito de two way biding onde o valor da varíavel é recebido pelo campo input para autenticação dos usuários e caso seja positivado, é autorizado a prosseguir para as demais páginas.',
      features: ['Services', ' Guard', ' Template Driven', ' Authentication'],
      route: 'projects/week7/login',
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }
}
