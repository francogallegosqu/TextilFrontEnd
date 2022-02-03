import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Service } from '../../models/service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  steps: number = 1;
  currentStep: number = 1;

  form: FormGroup;
  showErrorServiceMessage : boolean;
  constructor(
    private fb: FormBuilder, 
    private servService : ServiceService, 
    private authService: AuthService) 
  {
    this.form = this.fb.group({
      nameService: ['', [Validators.required]],
      descriptionService: ['', [Validators.required]],
    });
    this.showErrorServiceMessage = false;
  }

  ngOnInit(): void {
  }

  onStep(step: number){
    if (this.currentStep < this.steps) {
      this.currentStep = this.currentStep + step;
      return;
    }
    this.registerService();
  }

  registerService() {
    this.showErrorServiceMessage = false;
    if (this.form.valid)
    {
      let user = this.authService.getUser();
      let service : Service = {
        nameService: this.form.value.nameService,
        descriptionService: this.form.value.descriptionService,
        created_at : (new Date()).toString(),
        created_by : user?.idUsuario
      };

      this.servService.registerService(service).subscribe({
        next: resp => {
          console.log(resp);
          
        },
        error: error => {
          console.log(error)
        }
      });
    }
    else
    {
      this.showErrorServiceMessage = true;
    }
  }
}
