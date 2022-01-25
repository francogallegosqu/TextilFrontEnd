import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, timer } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocationService } from 'src/app/services/location/location.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage!: string;
  formOne!: FormGroup;
  formTwo!: FormGroup;
  countries: any;
  roles!: any;
  departments: any;
  cities: any;
  step: number = 1;
  loading = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private locationService: LocationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
  
   }

  ngOnInit(): void {
    this.formOne = this.fb.group({
      documentType: ['', Validators.required],
      dni: ['',Validators.pattern('[0-9]{8}')],
      ruc: ['', Validators.pattern('[0-9]{11}')],
      businessName: ['', Validators.required],
      userType: ['', Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6)]],
    });

    this.formOne.setValidators(this.requiredDniOrRUC)

    this.formTwo = this.fb.group({
      country: ['', Validators.required,],
      address: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    })
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
    this.loading = true;
    this.userService.getAllRoles().subscribe((data) => {
      this.roles = data;
      let user: User = {
        email: this.formOne.value.email,
        password: this.formOne.value.password,
        businessName: this.formOne.value.businessName,
        type_document: this.formOne.value.documentType,
        number_document: this.formOne.value.documentType == 'ruc'  ? this.formOne.value.ruc : this.formOne.value.dni,
        address: this.formTwo.value.address,
        idCity: this.formTwo.value.city,
        idRole: this.formOne.value.userType == 'buyer'  ? this.roles[1].idRole : this.roles[2].idRole
       };

      console.log(user);
      this.authService.register(user).pipe(first()).subscribe({
        next: () => {
          this.router.navigate(['../login'], { relativeTo: this.route, queryParams: {registered: 'true'} });
      },
      error: error => {
          console.log(error)
          this.errorMessage = error.error.message;
          this.loading = false;
      }
      });
    })
 }

  requiredDniOrRUC() {
    return (formGroup: any) => {
      if (formGroup.get('ruc').value === '' && formGroup.get('dni').value === '') {
        return {required: 'at least one of the items is required'}
      }
      return null;
    } 
  }

}

