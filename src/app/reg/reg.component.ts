import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";

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

  constructor(private _flashMessagesService: FlashMessagesService){ }
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
    else {
      console.log(user)
      return false
    }

  }
}
