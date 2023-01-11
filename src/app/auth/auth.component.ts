import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login!: string
  password!: string

  constructor(private _flashMessagesService: FlashMessagesService,
              private router: Router,
              private authService: AuthService){ }
  ngOnInit(): void  {
  }
  signIn() {
    const user = {
      login: this.login,
      password: this.password
    }
    if ((!user.login)||(!user.password)){
      this._flashMessagesService.show('We are in about component!',
        { cssClass: 'alert-danger', timeout: 2000 });
      return false
    }
    this.authService.authUser(user).subscribe(data=>{
      // @ts-ignore
      if (!data.success){
        // @ts-ignore
        this._flashMessagesService.show(data.msg,{ cssClass: 'alert-danger', timeout: 2000 });
      } else {
        // @ts-ignore
        this._flashMessagesService.show("You have successfully logged in",{ cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/dashboard'])
        // @ts-ignore
        this.authService.storeUser(data.token, data.user)
      }
    })
    return false
  }
}
