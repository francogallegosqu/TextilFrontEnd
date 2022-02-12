import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {

  constructor(private http: HttpClient) {
  }

  postAccessory(accessory: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(environment.TOKEN_NAME)}`
    })

    return this.http.post(`${environment.HOST}/accessories`, accessory, { headers: headers })
  }

  postFabric(fabric: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(environment.TOKEN_NAME)}`
    })

    return this.http.post(`${environment.HOST}/fabrics`, fabric, { headers: headers })
  }

  getFabricsByUserId(userId: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(environment.TOKEN_NAME)}`
    })

    return this.http.get(`${environment.HOST}/fabrics/user/${userId}`, { headers: headers })
  }

  getAccessoriesByUserId(userId: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(environment.TOKEN_NAME)}`
    })

    return this.http.get(`${environment.HOST}/accessories/user/${userId}`, { headers: headers })
  }
}
