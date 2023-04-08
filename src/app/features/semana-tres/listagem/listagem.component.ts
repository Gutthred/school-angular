import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  @Input() nome: string = '';
  @Input() userData!: {
    id: number;
    name: string;
    description: string;
    wage: number;
    role: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
