import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//viyasob266@funboxcn.com  12345

  constructor() { }
  loggedIn(){
    return !!localStorage.getItem('adminData')
  }
}
