import { AuthServiceService } from './../login/services/auth-service.service';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    
 public users? : any
  public lastquestions? :any
public lastTwentyQuestions? :  any = []
public hotQuestions? :  any = []
public email :any



  constructor(private http: HttpClient,
    private service : AuthServiceService) { 

   
  }
     
  ngOnInit(): void {
    this.http.get("http://localhost:3000/users").subscribe(data => this.users = data)

    this.http.get("http://localhost:3000/questions").subscribe(data => {
      this.lastquestions = data
   //   console.log(this.lastquestions)
      var br = 0;
      while (br != 20) {
        this.lastTwentyQuestions.push(this.lastquestions[br])
        br++
      }
    });
    this.http.get("http://localhost:3000/hotquestions").subscribe(data => this.hotQuestions = data)

  
 
}

  

LoadMore(){
  if(this.lastTwentyQuestions.length == this.lastquestions.length){
    return;
  }
  this.http.get("http://localhost:3000/questions").subscribe(data =>{
    this.lastquestions = data
  
    var br = 20;
    while (br != this.lastquestions.length) {
      this.lastTwentyQuestions.push(this.lastquestions[br])
      br++
    }
  });
}

 
}
