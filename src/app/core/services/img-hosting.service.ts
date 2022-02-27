import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgHostingService {

  APIKEY = "add7f595b9338167aebe518b11162e4e";
  HOST = "https://api.imgbb.com/1"

  constructor(private http: HttpClient) { }

  postImage() {

  }

  getImage() {

  }

  postImages() {

  }
  getImages() {

  }
}
