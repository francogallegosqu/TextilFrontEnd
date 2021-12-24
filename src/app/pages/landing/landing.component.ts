import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { faCogs, faHandshake, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { CAROUSEL_IMG_DATA_ITEMS } from 'src/app/components/carousel-img/carousel-img.const';

import { CAROUSEL_DATA_ITEMS } from 'src/app/components/carousel/carousel.const';
import { ICarouselItem } from 'src/app/models/Icarousel-item';
import { Item } from 'src/app/models/item';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, OnDestroy {
  myElement!: HTMLElement | null;
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public carousel_imgData: string[] = CAROUSEL_IMG_DATA_ITEMS;

  products!: Item[];
  orders!: Item[];

  // Icons 
  faSignInAlt = faSignInAlt;
  faCogs = faCogs;
  faHandshake = faHandshake;


  constructor(private productService: ProductsService, private orderService: OrdersService, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.orders = this.orderService.getAllOrders();
    this.myElement = this.document.getElementById('nav');
    this.myElement?.classList.remove('navbar-shadow');
  }
  ngOnDestroy() {
    this.myElement?.classList.add('navbar-shadow');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      this.document.body.scrollTop > 22 ||
      document.documentElement.scrollTop > 22
    ) {
      this.myElement?.classList.add('navbar-shadow');
    } else {
      this.myElement?.classList.remove('navbar-shadow');
    }
  }
}
