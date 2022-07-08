import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class SuploadfilesService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://file.io'

  upload(file: any): Observable<any> {
    const formData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer qwertyuiop');
    formData.append("file", file, file.name);
    return this.http.post(this.apiUrl, formData, {headers})
  }
}






















 // const options = {
    //   method: 'POST',
      // headers: {
      //   'accept': 'application/json',
      //   'Authorization': 'Bearer qwertyuiop',
      //   // 'Content-Type': 'multipart/form-data',
      //   'file': 'file'
      // }
    // };