import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'https://textilback.herokuapp.com';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private tokenSubscription = new Subscription();


  isLoggedIn$ = this._isLoggedIn$.asObservable();
  timeout: any;


  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {
    let token = localStorage.getItem(environment.TOKEN_NAME);
    //TODO: Check if token isn't expired before changing the state of the loggendIn observable
    this._isLoggedIn$.next(!!token);
  }

  public getUser(): User | null {
    let user = localStorage.getItem('user');
    if (user != null) return JSON.parse(user) as User;

    return null;
  }

  public getToken(): string | null {
    return localStorage.getItem(environment.TOKEN_NAME);
  }

  login(username: string, password: string): Observable<any> {
    const userReq: JSON = <JSON>(<unknown>{
      usernameOrEmail: username,
      password: password,
    });

    let body = userReq;
    return this.http.post(`${this.url}/signin`, body).pipe(
      tap((response: any) => {
        if (response) {
          localStorage.setItem(environment.TOKEN_NAME, response.jwt);
          localStorage.setItem('user', JSON.stringify(response.user));
          this._isLoggedIn$.next(true);
          this.timeout = this.jwtHelper.getTokenExpirationDate(response.jwt)!.valueOf() - new Date().valueOf();
          this.expirationCounter(this.timeout);
        }
      })
    );
  }

  expirationCounter(timeout: number) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      console.log('EXPIRED!!');
      this.logout();
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem(environment.TOKEN_NAME);
    localStorage.removeItem('user');
    this.tokenSubscription.unsubscribe();
    this.router.navigate(['auth/login']);
  }

  register(user: User) {
    return this.http.post('https://textilback.herokuapp.com/signup', user);
  }

  addAuthorizationHeader(httpHeaders: HttpHeaders) {
    let token = this.getToken();

    if (token != null)
      return httpHeaders.append('Authorization', 'Bearer ' + token);

    return httpHeaders;
  }

  getRole() {
    return this.getUser()!.role.role_name;
  }

}
