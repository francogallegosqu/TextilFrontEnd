import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
 
  loggedIn = false;
  faUserCircle = faUserCircle;
  name_user = 'Tilin';
  email_user = 'Tilin@eso.dale';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  login(){
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
