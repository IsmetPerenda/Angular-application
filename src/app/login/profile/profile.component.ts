import { User } from './../../models/user';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AuthServiceService]
})
export class ProfileComponent implements OnInit {


  myGroup! : FormGroup;
  myGroup2! : FormGroup;
 _currentUser : any;

  constructor(private fromBuilder : FormBuilder,
    private http: HttpClient,
    private router : Router,
    public authenticationService: AuthServiceService,
    
    ) {}

  ngOnInit(): void {
    this.myGroup = this.fromBuilder.group({
      name:'',
      surname:'',
      email:''
    });
    this.myGroup2 = this.fromBuilder.group({
      password:'',
    });
   this.http.get('http://localhost:3000/users/1').subscribe(data =>{
    this._currentUser = data

   });



  }
  changeInfo(){

  this.http.put('http://localhost:3000/users/1',this.myGroup.getRawValue()).subscribe(data => console.log(data))
  window.location.reload();
  }
  changePassword(){

  }
}


