import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private _flashMessagesService: FlashMessagesService,
              public authService: AuthService,
              private router: Router) {}
  ngOnInit(): void {
  }

  logoutUser(){
    this.authService.logout()
    // @ts-ignore
    this._flashMessagesService.show("You are logged out.",
      { cssClass: 'alert-success', timeout: 2000 });
    this.router.navigate(['/auth'])
  }
}
