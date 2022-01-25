import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: string;
  password!: string;
  message!: string;
  error!: string;
  form: FormGroup;
  showErrorLoginMessage : boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn())
    {
      this.router.navigate(['home']);
    }

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.showErrorLoginMessage = false;
  }

  ngOnInit(): void {}

  login() {
    this.showErrorLoginMessage = false;
    let user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.authService.login(user.email, user.password).subscribe({
      error: () => {
        this.showErrorLoginMessage = true;
      },
      complete: () => this.router.navigate(['home'])
    });
  }
}