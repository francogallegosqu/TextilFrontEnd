import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: 1,
      nombre: "Producto 1",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
    {
      id: 2,
      nombre: "Producto 2",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
    {
      id: 3,
      nombre: "Producto 3",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
    {
      id: 4,
      nombre: "Producto 4",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
    {
      id: 5,
      nombre: "Producto 5",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
    {
      id: 6,
      nombre: "Producto 6",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
    {
      id: 7,
      nombre: "Producto 7",
      categoria: "Categoria 1",
      pedidoMinimo: 10,
      precio: 100
    },
  ]

  constructor() {}

  getAllProducts() : Product[] {
    return this.products;
  }
}
