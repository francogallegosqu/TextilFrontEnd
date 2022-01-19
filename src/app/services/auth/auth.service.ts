import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'https://textilback.herokuapp.com';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    let token = localStorage.getItem(environment.TOKEN_NAME);
    //TODO: Check if token isn't expired before changing the state of the loggendIn observable
    this._isLoggedIn$.next(!!token);
  }

  public getUser() : User | null
  {
    let user = localStorage.getItem('user');
    if (user != null)
      return JSON.parse(user) as User;
    
    return null;
  }

  login(username: string, password: string): Observable<any> {
    const userReq: JSON = <JSON>(<unknown>{
      usernameOrEmail: username,
      password: password,
    });

    let body = userReq;
    return this.http.post(`${this.url}/signin`, body).pipe(
      tap((res: any) => {
        if (res) {
          localStorage.setItem(environment.TOKEN_NAME, res.jwt);
          localStorage.setItem('user', JSON.stringify(res.user));
          this._isLoggedIn$.next(true);
          this.router.navigate(['home']);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem(environment.TOKEN_NAME);
    if (!token) {
      return false;
    }
    return true;
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem(environment.TOKEN_NAME);
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }

  register(user: User) {
    localStorage.setItem(environment.TOKEN_NAME, '123');
    this._isLoggedIn$.next(true);
    this.router.navigate(['home']);
  }
}
