import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string;

  constructor(private router: Router) {
    console.log(localStorage.username);
    this.username = localStorage.username;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit() {}
}
