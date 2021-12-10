import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products!: Item[];
  orders!: Item[];
  constructor(private productService: ProductsService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.orders = this.orderService.getAllOrders();
  }

}

