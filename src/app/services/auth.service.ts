import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private url: string = '';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    let token = localStorage.getItem(environment.TOKEN_NAME);
    //TODO: Check if token isn't expired before changing the state of the loggendIn observable
    this._isLoggedIn$.next(!!token);
  }

  login(username: string, password: string) {
    let body = ``;
    // return this.http.post(this.url, body);
    localStorage.setItem(environment.TOKEN_NAME, "123")  
    this._isLoggedIn$.next(true);
    this.router.navigate(["/"])
  }

  isLoggedIn() {
    let token = localStorage.getItem(environment.TOKEN_NAME);
  }

  logout() {
    this._isLoggedIn$.next(false)
    localStorage.removeItem(environment.TOKEN_NAME);
    this.router.navigate(['auth/login']);
  }

  register(user: User) {
    localStorage.setItem(environment.TOKEN_NAME, "123")  
    this._isLoggedIn$.next(true);
    this.router.navigate(["/"])
  }
}
