import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/landing-page/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  //TODO: Refactor interface and use a different one for each service
  orders: Item[] = [
    {
      id: 1,
      nombre: 'Servicio 1',
      categoria: 'Categoria 1',
      pedidoMinimo: 50,
      precio: 150,
    },
    {
      id: 2,
      nombre: 'Servicio 2',
      categoria: 'Categoria 1',
      pedidoMinimo: 200,
      precio: 10,
    },
    {
      id: 3,
      nombre: 'Servicio 3',
      categoria: 'Categoria 3',
      pedidoMinimo: 150,
      precio: 150,
    },
  ];

  constructor(private http: HttpClient) { }

  getAllOrders(): Item[] {
    return this.orders;
  }

  getAllServicesByUserId(userId: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(environment.TOKEN_NAME)}`
    })

    return this.http.get(`${environment.HOST}/services/user/${userId}`, { headers: headers })
  }
}

