import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/pages/login/login.component';

export interface CanComponentLeave{canLeave:()=>boolean}
@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuardGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(
    component: CanComponentLeave,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(component.canLeave){return component.canLeave()}
     return true;
  }
  
}
// if(component.loginForm.dirty){window.confirm('Surely')}
// else{return true;}  
// return true;