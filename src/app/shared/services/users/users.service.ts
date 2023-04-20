import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: 1,
      name: 'Leprechaun',
      email: 'lele',
      pass: 'leprechaun',
    },
    {
      id: 2,
      name: 'Fabio Silva',
      email: 'fabio@gold.pot',
      pass: 'fabio',
    },
  ];

  constructor() {}

  getUser() {
    return this.users;
  }

  getUserByEmailAndPassword(email: string, pass: string) {
    return this.users.find(
      (user) => user.email === email && user.pass === pass
    );
  }
}
