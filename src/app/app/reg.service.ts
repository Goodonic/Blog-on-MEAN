import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  registerUser( user: any){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:3000/account/reg', user,
      {headers: headers})
  }
}
