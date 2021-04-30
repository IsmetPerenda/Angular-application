import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css']
})
export class LoginNavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
