import { Component } from '@angular/core';

@Component({
  templateUrl: './week3.component.html',
  styleUrls: ['./week3.component.scss'],
})
export class Week3Component {
  user = {
    id: 1,
    name: 'Giorgino Atalanti',
    description:
      'Someone who has living between 0 BC and 2500 AC, which has been designated to implement the most traditional way of living to the whole humanity, creator of veganism, activist, femminism, neutral gender and all those cringe stuffs.',
    wage: 2,
    role: 'Victim of society',
  };
}
