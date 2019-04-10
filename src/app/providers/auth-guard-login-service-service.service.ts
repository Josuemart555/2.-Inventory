import { Injectable } from '@angular/core';
import {  Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivate
        } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginServiceServiceService {

  constructor( private router: Router ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    if ( JSON.parse(localStorage.getItem('usuario')) != null ) {
      this.router.navigate(['/home'])
      return false;
    } else {
      return true;
    }

  }
}
