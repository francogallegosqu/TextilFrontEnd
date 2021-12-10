import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myElement!: HTMLElement | null;
  constructor(@Inject(DOCUMENT) private document: Document) { }

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

}
