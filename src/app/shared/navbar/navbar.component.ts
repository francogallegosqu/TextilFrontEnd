import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myElement!: HTMLElement | null;
  loggedIn = false;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.myElement = this.document.getElementById("nav");
    if (this.document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
      this.myElement?.classList.add("shadow");
    }
    else {
      this.myElement?.classList.remove("shadow");
    }
  }

  login() {
    this.loggedIn = true
  }

  logout() {
    this.loggedIn = false
  }

}
