import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangeEmailComponent } from './pages/change-email/change-email.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { SuppliesListComponent } from './pages/supplies-list/supplies-list.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ChangeEmailComponent,
    ServicesListComponent,
    SuppliesListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
