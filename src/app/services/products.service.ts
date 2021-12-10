import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Item[] = [
    {
      id: 1,
      nombre: "Producto 1",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 150
    },
    {
      id: 2,
      nombre: "Producto 2",
      categoria: "Categoria 1",
      pedidoMinimo: 101,
      precio: 10
    },
    {
      id: 3,
      nombre: "Producto 3",
      categoria: "Categoria 3",
      pedidoMinimo: 110,
      precio: 150
    }
  ]

  constructor() {}

  getAllProducts() : Item[] {
    return this.products;
  }
}
