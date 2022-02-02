import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceComponent } from './pages/service/service.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { StepperHeaderComponent } from './components/stepper-header/stepper-header.component';
import { StepperFooterComponent } from './components/stepper-footer/stepper-footer.component';


@NgModule({
  declarations: [
    PublishComponent,
    ServiceComponent,
    SuppliesComponent,
    StepperHeaderComponent,
    StepperFooterComponent
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    SharedModule
  ]
})
export class PublishModule { }
