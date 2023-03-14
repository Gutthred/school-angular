import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = 'Fabio Gostosão';
  userData = {
    id: 7,
    name: 'Fabio Silva',
    role: 'Front-end Developer Junior',
    description:
      'Neste exercício foi utilizado o metodo INPUT para informar ao componente filho os dados enviados pelo componente pai, simulando uma busca em um banco de dados e retornando os dados conforme a pesquisa',
    wage: 4000,
  };

  title = 'Componentes, Módulos e Data binding';
}
