import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url: string = 'https://textilback.herokuapp.com/api';
  private httpHeaders : HttpHeaders;

  constructor(private http: HttpClient, private authService : AuthService) {
    this.httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});
  }

  registerService(service : Service) {
    return this.http.post(`${this.url}/services`, service, {headers: this.authService.addAuthorizationHeader(this.httpHeaders)});
  }
}
