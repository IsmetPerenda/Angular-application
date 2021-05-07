import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-myquestions',
  templateUrl: './login-myquestions.component.html',
  styleUrls: ['./login-myquestions.component.css']
})
export class LoginMyquestionsComponent implements OnInit {
myQuestions : any
  constructor(  private http: HttpClient,) { }

  ngOnInit(): void {
    this.http.get('https://fake-server-api.herokuapp.com/questions/?userid=1').subscribe(data =>{
      this.myQuestions = data
 // console.log(this.myQuestions)
     });
  }

}
