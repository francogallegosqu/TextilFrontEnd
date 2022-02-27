import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from 'src/app/core/guards/has-role.guard';
import { AccessoryDetailsComponent } from './pages/accessory-details/accessory-details.component';
import { FabricDetailsComponent } from './pages/fabric-details/fabric-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { SuppliesListComponent } from './pages/supplies-list/supplies-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'supplies', component: SuppliesListComponent,
        canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        }
      },
      {
        path: 'supplies/accessory/:id', component: AccessoryDetailsComponent, canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        },
      },
      {
        path: 'supplies/fabric/:id', component: FabricDetailsComponent, canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        },
      },
      {
        path: 'supplies/services/:id', component: ServiceDetailsComponent, canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        },
      },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'profile' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
