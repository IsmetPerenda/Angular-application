import { AuthServiceService } from './login/services/auth-service.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './login/profile/profile.component'
import { HomepageComponent } from './homepage/homepage.component';

import { QuestionpageComponent } from './questionpage/questionpage.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { LoginMyquestionsComponent } from './login/login-myquestions/login-myquestions.component';
import { LoginQuestionComponent } from './login/login-question/login-question.component';
import { LoginNavComponent } from './login/login-nav/login-nav.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    HomepageComponent,
    QuestionpageComponent,
    LoginHomeComponent,
    LoginMyquestionsComponent,
    LoginQuestionComponent,
    LoginNavComponent
  ],
  imports: [
    BrowserModule,
 AppRoutingModule,
 FormsModule,
 ReactiveFormsModule,
 HttpClientModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
