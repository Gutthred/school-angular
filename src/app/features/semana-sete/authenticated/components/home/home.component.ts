import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hintHasBeenUsed: boolean = false;

  constructor(private router: Router){
    const sessionHint = sessionStorage.getItem('hint');
    if(sessionHint == 'true') this.hintHasBeenUsed = true;
  }

  clearSession(){
    sessionStorage.clear();
    this.router.navigateByUrl('projects/week7/login');
  }

}
