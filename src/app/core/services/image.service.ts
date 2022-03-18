import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  postImageById(image: any) {
    return this.http.post(`${environment.HOST}/images`, image)
  }

  getImagesById(id: string) {
    return this.http.get(`${environment.HOST}/images/images/${id}`)
  }
}
