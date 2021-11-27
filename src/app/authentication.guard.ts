import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, 
              private auth: AuthenticationService){}


  privilegesSize:number;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated = localStorage.getItem('isLoggedIn');
      if (isAuthenticated=='true') {
          return true;
      }
      return this.FailedAccess();
  }



FailedAccess(){
 this.auth.logout();
 this.router.navigate(['/login']); 
 return false;
}




  


}