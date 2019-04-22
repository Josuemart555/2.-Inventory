import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUserPermitsService {
  //permits guest
  user: Users;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.user.role == 'GUEST') {
      this.router.navigate(['/home'])
      return false;
    } else {
      return true;
    }

  }

}
