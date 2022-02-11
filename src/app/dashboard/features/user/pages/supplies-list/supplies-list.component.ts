import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.css'],
})
export class SuppliesListComponent implements OnInit {
  user!: User;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser()!;
    console.log(this.authService.getRole());
  }
}
