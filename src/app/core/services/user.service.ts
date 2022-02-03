import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getAllUsers() : User[] {
    
  // }

  // getUserById(id: number): User {
  //  
  // }

  getAllRoles(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", 0)
                             .append("size", 15)
                             .append("sortDir", "asc")
                             .append("sort", "idRole");
    return this.http.get(`${environment.HOST}/roles`, {params: queryParams});
  }
}
