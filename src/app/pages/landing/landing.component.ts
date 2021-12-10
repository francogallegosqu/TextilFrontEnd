import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/components/carousel/carousel.const';
import { ICarouselItem } from 'src/app/models/Icarousel-item';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
