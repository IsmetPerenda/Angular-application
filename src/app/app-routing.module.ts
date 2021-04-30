import { LoginMyquestionsComponent } from './login/login-myquestions/login-myquestions.component';
import { LoginQuestionComponent } from './login/login-question/login-question.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { ProfileComponent } from './login/profile/profile.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

const routes: Routes = [
        {
            path:'homepage',component: HomepageComponent
        },
        {
            path:'questionpage',component: QuestionpageComponent
        },
        {
            path:'profile',component: ProfileComponent
        },
        {
            path:'login',component: LoginComponent
        },
        {
            path:'register',component: RegisterComponent
        },
        {
            path:'loginHome',component: LoginHomeComponent
        },
        {
            path:'loginQuestion',component: LoginQuestionComponent
        },
        {
            path:'loginMyquestions',component: LoginMyquestionsComponent
        }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }