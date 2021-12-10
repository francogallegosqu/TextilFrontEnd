import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  //TODO: Refactor interface and use a different one for each service 
  orders: Item[] = [
    {
      id: 1,
      nombre: "Pedido 1",
      categoria: "Categoria 1",
      pedidoMinimo: 50,
      precio: 150
    },
    {
      id: 2,
      nombre: "Pedido 2",
      categoria: "Categoria 1",
      pedidoMinimo: 200,
      precio: 10
    },
    {
      id: 3,
      nombre: "Pedido 3",
      categoria: "Categoria 3",
      pedidoMinimo: 150,
      precio: 150
    }
  ]

  constructor() {}

  getAllOrders() : Item[] {
    return this.orders;
  }
}
