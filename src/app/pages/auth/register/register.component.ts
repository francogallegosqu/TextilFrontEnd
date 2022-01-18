import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocationService } from 'src/app/services/location/location.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formOne: FormGroup;
  formTwo: FormGroup;
  countries: any;
  departments: any;
  cities: any;
  step: number = 1;

  constructor(private fb: FormBuilder, private authService: AuthService, private locationService: LocationService) {
    // TODO: Complete validations
    this.formOne = this.fb.group({
      documentType: ['', Validators.required],
      dni: ['', Validators.required ],
      ruc: ['', Validators.required],
      businessName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]],
    })

    this.formTwo = this.fb.group({
      country: ['', Validators.required,],
      address: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    //TODO: Make loading data async for departments and cities once country and department has been selected
   this.locationService.getCountries(0, 100).subscribe(data => {
    this.countries = data;
   });
   this.locationService.getDepartmentsByCountryId("", 0, 100).subscribe(data =>{
    this.departments = data;
   });
   this.locationService.getCitiesByDepartmentId("", 0, 100).subscribe(data => {
     this.cities = data;
   })
  }

  nextStep(){
    this.step = this.step + 1;
  }

  lastStep(){
    this.step = this.step - 1;
  }

  register(){

    // TODO: Update User Class with address info
    console.log(this.formOne.value.documentType)
    let user: User = {
     id: 1,
     document: this.formOne.value.documentType == 'ruc'  ? this.formOne.value.ruc : this.formOne.value.dni,
     businessName: this.formOne.value.businessName,
     email: this.formOne.value.email,
     password: this.formOne.value.password,
     employyes: [],
     userType: UserType.Master
    }
    // TODO: Update register method
    this.authService.register(user);

  }

}
