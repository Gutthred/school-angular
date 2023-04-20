import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean {
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) return true;
    this.router.navigateByUrl('/week7/login')
    return false;
  }
  
}
