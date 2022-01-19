import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
 
  loggedIn = false;
  faUserCircle = faUserCircle;
  user: User | null;
  username:string = '';


  constructor(
    private router: Router,
    public authService: AuthService
  ) 
  {
    this.user = this.authService.getUser();
    console.log(this.user);
    let aux = this.user?.email?.split('@')[0];
    if (aux) this.username = aux;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
