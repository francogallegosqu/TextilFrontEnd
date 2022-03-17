import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from '../../../user/models/service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  loading = true
  formService!: FormGroup
  id!: string;
  service!: Service
  errorMessage: any;
  constructor(private router: Router, private fb: FormBuilder, private servicesService: ServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.servicesService.getServiceById(this.id).subscribe((data) => {
        this.service = data as Service
        this.formService = this.fb.group({
          serviceName: [this.service.nameService, [Validators.required]],
          serviceDescription: [this.service.descriptionService, Validators.required],
          servicePrice: [this.service.priceService, [Validators.required]]
        })
        this.loading = false
      })
    })
  }

  edit() {
    this.loading = true
    let service = {
      idService: this.id,
      nameService: this.formService.value.serviceName,
      descriptionService: this.formService.value.serviceDescription,
      priceService: this.formService.value.servicePrice,
      created_at: this.service.created_at,
      updated_at: new Date().toString(),
      created_by: this.service.created_by
    }
    this.servicesService.postService(service).subscribe({
      next: (data) => {
        this.loading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.errorMessage = error.error.message;
        this.loading = false;
      },
    });
  }

  back() {
    this.router.navigate(['/dashboard/user/supplies/services', this.id])
  }
}
