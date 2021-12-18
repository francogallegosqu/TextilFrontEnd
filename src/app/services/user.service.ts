import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserType } from '../models/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      email: "diego@gmail.com",
      password: "password",
      userType: UserType.Master,
      businessName: "Diego Johnson",
      document: "72212167",
      employyes: [
        {
          id: 2,
          email: "anibal@gmail.com",
          password: "password",
          userType: UserType.Employee,
          businessName: "Anibal Ludena",
          document: "72212167",
        },
        {
          id: 3,
          email: "ashlyn@gmail.com",
          password: "password",
          userType: UserType.Employee,
          businessName: "Ashlyn Demrest",
          document: "72212167",
        },
        {
          id: 4,
          email: "summer@gmail.com",
          password: "password",
          userType: UserType.Employee,
          businessName: "Summer Dawn",
          document: "72212167",
        }
      ],
    },
    {
      id: 4,
      email: "summer@gmail.com",
      password: "password",
      userType: UserType.Employee,
      businessName: "Summer Dawn",
      document: "72212167",
    },
    {
      id: 2,
      email: "anibal@gmail.com",
      password: "password",
      userType: UserType.Employee,
      businessName: "Anibal Ludena",
      document: "72212167",
    },
    {
      id: 3,
      email: "ashlyn@gmail.com",
      password: "password",
      userType: UserType.Employee,
      businessName: "Ashlyn Demrest",
      document: "72212167",
    },
    {
      id: 4,
      email: "summer@gmail.com",
      password: "password",
      userType: UserType.Employee,
      businessName: "Summer Dawn",
      document: "72212167",
    }
  ]

  constructor() { }

  getAllUsers() : User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.filter(user => user.id == id)[0];
  }
}
