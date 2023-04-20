import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  user?: User;

  ngOnInit(): void{
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
    

  }

}
