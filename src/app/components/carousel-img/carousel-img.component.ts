import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.css'],
})
export class CarouselImgComponent implements OnInit {
  @Input() items: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
