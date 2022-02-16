import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangeEmailComponent } from './pages/change-email/change-email.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { SuppliesListComponent } from './pages/supplies-list/supplies-list.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { FabricDetailsComponent } from './pages/fabric-details/fabric-details.component';
import { AccessoryDetailsComponent } from './pages/accessory-details/accessory-details.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ChangeEmailComponent,
    ServicesListComponent,
    SuppliesListComponent,
    ServiceDetailsComponent,
    FabricDetailsComponent,
    AccessoryDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
