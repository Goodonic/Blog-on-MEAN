import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlashMessagesModule} from "flash-messages-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import {RegService} from "./reg.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FlashMessagesModule.forRoot(),
        HttpClientModule,
    ],
  providers: [RegService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
