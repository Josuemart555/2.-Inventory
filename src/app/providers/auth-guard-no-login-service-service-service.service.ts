import { Injectable } from '@angular/core';
import {  Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivate
        } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardNoLoginServiceServiceServiceService {

  constructor( private router: Router ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    if ( JSON.parse(localStorage.getItem('usuario')) == null ) {
      this.router.navigate(['/login'])
      return false;
    } else {
      return true;
    }

  }
}
