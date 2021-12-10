import { Component, OnInit } from '@angular/core';
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
export class LandingComponent implements OnInit {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  constructor() {}
  products!: Item[];
  orders!: Item[];
  constructor(private productService: ProductsService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.orders = this.orderService.getAllOrders();
  }

}

