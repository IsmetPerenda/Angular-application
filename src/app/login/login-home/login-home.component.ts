import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  public users? : any
  public lastquestions? :any
public lastTwentyQuestions? :  any = []
public hotQuestions? :  any = []
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get("https://fake-server-api.herokuapp.com/users").subscribe(data => this.users = data)
    this.http.get("https://fake-server-api.herokuapp.com/questions").subscribe(data => {
      this.lastquestions = data
   //   console.log(this.lastquestions)
      var br = 0;
      while (br != 20) {
        this.lastTwentyQuestions.push(this.lastquestions[br])
        br++
      }
    });
    this.http.get("https://fake-server-api.herokuapp.com/hotquestions").subscribe(data => this.hotQuestions = data)
}

  

LoadMore(){
  if(this.lastTwentyQuestions.length == this.lastquestions.length){
    return;
  }
  this.http.get("https://fake-server-api.herokuapp.com/questions").subscribe(data =>{
    this.lastquestions = data
    var br = 20;
    while (br != this.lastquestions.length) {
      this.lastTwentyQuestions.push(this.lastquestions[br])
      br++
    }
  });
}

}
