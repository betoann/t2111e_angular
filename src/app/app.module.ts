import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CurrentWeatherComponent} from "./currentweather/currentweather.component";
import {HttpClientModule} from "@angular/common/http";
import {ForecastComponent} from "./forecastweather/forecast.component";

const appRoutes:Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgot-password",component:ForgotpasswordComponent},
  {path:"current-weather",component:CurrentWeatherComponent},
  {path:"forecast-weather",component:ForecastComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,FooterComponent,
    LoginComponent,RegisterComponent,ForgotpasswordComponent,
    CurrentWeatherComponent,ForecastComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
