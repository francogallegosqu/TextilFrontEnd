import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products!: Product[];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    console.log(this.products[0])
  }

}

