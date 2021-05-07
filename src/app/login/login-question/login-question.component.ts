import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from './../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-question',
  templateUrl: './login-question.component.html',
  styleUrls: ['./login-question.component.css']
})
export class LoginQuestionComponent implements OnInit {

  questions: any = []
  questions20: any = []
  allAnswers: any = []
  answers : any = []
  sendQuestion : any
  formG? : FormGroup
  constructor(private http: HttpClient,
    private authservice:AuthServiceService,
    private form : FormBuilder) { }

  ngOnInit(): void {


    

    this.http.get("https://fake-server-api.herokuapp.com/questions").subscribe(data => {
      this.questions = data
      //   console.log(this.lastquestions)
      var br = 0;
      while (br != 20) {
        this.questions20.push(this.questions[br])
        br++
      }

      this.http.get("https://fake-server-api.herokuapp.com/answers").subscribe(data => {
        this.allAnswers = data
      });


    });

}
  LoadMore() {
    if (this.questions20.length == this.questions.length) {
      return;
    }
    this.http.get("https://fake-server-api.herokuapp.com/questions").subscribe(data => {
      this.questions = data

      var br = 20;
      while (br != this.questions.length) {
        this.questions20.push(this.questions[br])
        br++
      }
    });
  }
getAnswers(){
 var  br = 0;
 this.answers = []
  while (br != this.allAnswers.length) {
  if(this.allAnswers[br].questionid == this.questions20[br].id){
      this.answers.push(this.allAnswers[br])
  }
    br++
    }

    
  }

  send(answers: string ){
    
    this.http.post("https://fake-server-api.herokuapp.com/answers", answers).subscribe(data => {
      console.log(data)
      });
  }
}
