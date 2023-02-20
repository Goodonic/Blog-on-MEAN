import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {RegService} from "../reg.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  name!: string
  login!: string
  email!: string
  password!: string

  constructor(private _flashMessagesService: FlashMessagesService,
              private regService: RegService,
              private router: Router){ }
  ngOnInit(): void  {
  }
  signUp() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    }
    if ((!user.name)||(!user.email)||(!user.login)||(!user.password)){
      this._flashMessagesService.show('We are in about component!',
        { cssClass: 'alert-danger', timeout: 2000 });
      return false
    }

    this.regService.registerUser(user).subscribe(data=>{
      // @ts-ignore
      if(!data.success){
        // @ts-ignore
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-danger', timeout: 2000 });
        this.router.navigate(['/reg'])
      }
      else {
        // @ts-ignore
        this._flashMessagesService.show(data.msg,
          { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/auth'])
      }
    })
    return false


  }
}
