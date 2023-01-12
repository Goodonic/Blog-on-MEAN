import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any
  user: any
  constructor(private http: HttpClient) { }

  authUser( user: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:3000/account/auth', user,
      {headers: headers})
  }
  storeUser(token: any,user: any){
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    this.token = token;
    this.user = user;
  }
  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear()
  }
}
