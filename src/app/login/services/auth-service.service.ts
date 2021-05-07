import { Router } from '@angular/router';
import { User } from '../../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedUser :any
  public pom: any = []
  public users: any = []
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit() {

  }
  login(user: User):any {
    var pogresno = true;
    var id = 0;
    this.http.get('https://fake-server-api.herokuapp.com/users').subscribe(data => {
      this.users = data
var i = 0;

while(i != this.users.length){
 
      if (user.email == this.users[i].email && user.password == this.users[i].password) {
        this.loggedIn.next(true);
        id =this.users[i].id
        pogresno = false;
        this.router.navigate(['/loginHome']);
        
      }
      i++;
    }
  
    if (pogresno == true){
      alert("Pogresni podaci!");
    }
   
    });
 
  }
  setUser(id : any) {
  this.loggedUser = id
  }
  getUser() {
    return this.loggedUser
    }

}




