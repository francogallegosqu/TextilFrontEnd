import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

 /**
   * Custom Properties
   */
  @Input() items: CarouselItem[] = [];
  @Input() id_carousel: string = 'testimonial';

  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;

  constructor() {}

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
  }

}
