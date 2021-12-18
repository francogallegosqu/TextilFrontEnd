import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    let body = ``;
    return this.http.post(this.url, body);
  }

  isLoggedIn() {
    let token = localStorage.getItem(environment.TOKEN_NAME);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
