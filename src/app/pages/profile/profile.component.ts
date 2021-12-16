import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userId!: number;
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = 1
    this.loadUser()
    console.log(this.user)
  }


  loadUser() {
    this.user = this.userService.getUserById(this.userId);
  }
}
