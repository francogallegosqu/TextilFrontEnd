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


    return this.http.post(`${environment.HOST}/accessories`, accessory)
  }

  postFabric(fabric: any) {


    return this.http.post(`${environment.HOST}/fabrics`, fabric)
  }

  getFabricsByUserId(userId: string) {
    return this.http.get(`${environment.HOST}/fabrics/user/${userId}`)
  }

  getAccessoriesByUserId(userId: string) {
    return this.http.get(`${environment.HOST}/accessories/user/${userId}`)
  }
}
