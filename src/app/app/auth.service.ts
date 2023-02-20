import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any
  user: any
  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService
  ) { }

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

  isAuthenticated(){
    //console.log(this.token)
    // console.log(this.jwtHelper.isTokenExpired(this.token))
    return !this.jwtHelper.isTokenExpired(this.token)}


}
