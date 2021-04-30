import { User } from './../models/user';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceService]
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  pom: any = []
  private formSubmitAttempt?: boolean;
  public users: User[] = []
  constructor(
    private fromBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dataTrans: AuthServiceService
  ) { }

  ngOnInit(): void {

    this.form = this.fromBuilder.group({
      email: '',
      password: ''
    });

  }

  submit() {
    if (this.form.valid) {
     var id =  this.dataTrans.login(this.form.value);

    }
    this.formSubmitAttempt = true;
   }
  
}

