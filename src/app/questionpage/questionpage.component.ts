import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent implements OnInit {
  questions: any = []
  questions20: any = []
  allAnswers: any = []
  answers : any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    this.http.get("http://localhost:3000/questions").subscribe(data => {
      this.questions = data
      //   console.log(this.lastquestions)
      var br = 0;
      while (br != 20) {
        this.questions20.push(this.questions[br])
        br++
      }

      this.http.get("http://localhost:3000/answers").subscribe(data => {
        this.allAnswers = data
      });


    });
}
  LoadMore() {
    if (this.questions20.length == this.questions.length) {
      return;
    }
    this.http.get("http://localhost:3000/questions").subscribe(data => {
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


}
