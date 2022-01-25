import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 4,
      email: "summer@gmail.com",
      password: "password",
      role: "",
      businessName: "Summer Dawn",
      number_document: "72212167",
      type_document: "dni",
      address: "asd",
      city: "asdasd"
        }
  ]

  constructor(private http: HttpClient) { }

  getAllUsers() : User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.filter(user => user.id == id)[0];
  }

  getAllRoles(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", 0)
                             .append("size", 15)
                             .append("sortDir", "asc")
                             .append("sort", "idRole");
    return this.http.get(`${environment.HOST}/roles`, {params: queryParams});
  }
}
