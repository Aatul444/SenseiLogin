import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SusersDataService {

  userInput: any;
userToken:any;
  constructor(private http: HttpClient) { }

  loginData(data: any) {
    console.log(data)
    this.userInput = data.value;
    const options = {
      method: 'POST',
      headers: {
      }
    };
    const body = {
      email: this.userInput.email,
      password: this.userInput.password,
      device_type: '',
      device_token: ''
    }
    return this.http.post('https://sensei.school/wp-json/wc/v3/parent/login', body, options)
    .pipe(

      retry(1),
 
      // catchError(err:any)
 
    );
 }
}
