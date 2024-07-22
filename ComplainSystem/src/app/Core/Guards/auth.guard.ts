import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(public _authService: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    debugger;
    if (!this._authService.isLoggedIn()) {
      debugger;
      window.alert('Access Denied, Login is Required to Access This Page!');
      this.router.navigate(['']);
    }
    return true;
  }
}