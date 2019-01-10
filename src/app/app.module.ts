import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import {LoginService} from "./services/login.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {appRoutes} from '../routes/app.routes'; 
import {APP_BASE_HREF} from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from "./my.interceptor";
import { IndexComponent } from './components/index/index.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { HomeComponent } from './components/home/home.component';
import { FollowupComponent } from './components/followup/followup.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IndexComponent,
    CreateprojectComponent,
    HomeComponent,
    FollowupComponent,
    RegisterComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService,{provide: APP_BASE_HREF, useValue : '/' },
    {
    provide:HTTP_INTERCEPTORS,
    useClass:MyInterceptor,
    multi:true
  }],
  bootstrap: [IndexComponent]
})
export class AppModule { }
