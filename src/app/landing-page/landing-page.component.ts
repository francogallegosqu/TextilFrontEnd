import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { faCogs, faHandshake, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../core/services/products.service';
import { ServicesService } from '../core/services/services.service';
import { CAROUSEL_IMG_DATA_ITEMS } from './constants/carousel-img.const';
import { CAROUSEL_DATA_ITEMS } from './constants/carousel.const';
import { CarouselItem } from './models/carousel-item';
import { Item } from './models/item';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  myElement!: HTMLElement | null;
  public carouselData: CarouselItem[] = CAROUSEL_DATA_ITEMS;
  public carousel_imgData: string[] = CAROUSEL_IMG_DATA_ITEMS;

  products!: Item[];
  orders!: Item[];

  // Icons 
  faSignInAlt = faSignInAlt;
  faCogs = faCogs;
  faHandshake = faHandshake;


  constructor(private productService: ProductsService, private serviceService: ServicesService, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.orders = this.serviceService.getAllOrders();
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
