import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accessory } from 'src/app/dashboard/features/user/models/accessory';
import { Fabric } from 'src/app/dashboard/features/user/models/fabric';
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

  putAccessory(accessory: any) {
    console.log("here")
    console.log(accessory)
    return this.http.put(`${environment.HOST}/accessories/${accessory.idAccessory}`, accessory)
  }

  postFabric(fabric: any) {
    return this.http.post(`${environment.HOST}/fabrics`, fabric)
  }
  putFabric(fabric: any) {
    console.log("here")
    console.log(fabric)
    return this.http.put(`${environment.HOST}/fabrics/${fabric.idFabric}`, fabric)
  }

  getFabricsByUserId(userId: string) {
    return this.http.get(`${environment.HOST}/fabrics/user/${userId}`)
  }

  getAccessoriesByUserId(userId: string) {
    return this.http.get(`${environment.HOST}/accessories/user/${userId}`)
  }

  getFabricById(id: string) {
    return this.http.get(`${environment.HOST}/fabrics/${id}`)
  }
  getAccessoryById(id: string) {
    return this.http.get(`${environment.HOST}/accessories/${id}`)
  }
}
