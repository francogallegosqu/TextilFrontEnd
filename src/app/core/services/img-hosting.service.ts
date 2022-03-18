import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgHostingService {

  preset = "angular_textil"
  could_name = "dvewj2lqa"
  HOST = "https://api.cloudinary.com/v1_1"

  constructor(private http: HttpClient) { }

  postImage(file: File) {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', this.preset)
    data.append('cloud_name', this.could_name)

    return this.http.post(`${this.HOST}/${this.could_name}/image/upload`, data)
  }
  getImage() {

  }

  postImages() {

  }
  getImages() {

  }
}
