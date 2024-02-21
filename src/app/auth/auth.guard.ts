import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('admin')) {
      switch (state.url) {
        case '/dashboard':
          return true;
        case '/employee':
          return true;
        case '/viewresources':
          return true;
        case '/onboarding':
          return true;
        case '/complete-onboarding':
          return true;
        case '/onboarding':
          return true;
        case '/bgv':
          return true;
        case '/admin-dashboard':
          return true;
        case '/login':
          return false;
        default:
          return false;
      }
    }
    else if (localStorage.getItem('user')) {
      switch (state.url) {
        case '/dashboard':
          return true;
        case '/login':
          return false;
        default:
          return false;
      }
    }

    else {
      this.route.navigate(['login'])
      return false;
    }
  }

}

