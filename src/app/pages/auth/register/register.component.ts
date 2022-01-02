import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      ruc: ['', Validators.required],
      businessName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  register(){
    let user: User = {
     id: 1,
     document: this.form.value.ruc,
     businessName: this.form.value.businessName,
     email: this.form.value.email,
     password: this.form.value.password,
     employyes: [],
     userType: UserType.Master
    }
   
    this.authService.register(user);

  }

}
