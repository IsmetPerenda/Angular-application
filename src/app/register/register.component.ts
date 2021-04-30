import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form! : FormGroup;
  submitted = false;
  constructor(
    private fromBuilder : FormBuilder,
    private http: HttpClient,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.form = this.fromBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]], 
    
    });
  }
  get f() { return this.form.controls; }  
submit():void{
  this.submitted = true;
  if (this.form.invalid) {
    return;
}
 this.http.post('http://localhost:3000/users', this.form.getRawValue()).subscribe(

  () => this.router.navigate(['./login'])
  )

} 



}
