import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string = '';
  pass: string = '';
  error: boolean = false;
  showHint: boolean = false;


  constructor(
    private userService: UsersService,
     private router: Router
  ) {}

  getAuthenticate() {
    const user = this.userService.getUserByEmailAndPassword(
      this.email,
      this.pass
    );

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('projects/week7/gold-pot');
    } else {
      this.error = true;
    }
  }

  clearSession(){
    sessionStorage.clear();
    this.router.navigateByUrl('projects/week7')
  }

  displayHint(){
    this.showHint = !this.showHint;
  }

}
