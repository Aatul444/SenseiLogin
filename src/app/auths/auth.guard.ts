import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _authService:AuthService, private _router:Router){}
canActivate():boolean {
  if(this._authService.loggedIn()){return true}
  else{this._router.navigate(['/login']);return false}
}
}