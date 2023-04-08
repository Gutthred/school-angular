import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character!: {
    id: number;
    name: string;
    clan: string;
    affiliation: string[];
    mainAffiliation: string;
    nature: string[];
    patent: string;
    mission: number;
    kill: number;
    img: string;
  };

  averageKill(k: number, m: number) {
    return Math.floor(k / m);
  }

  constructor() {}
}
