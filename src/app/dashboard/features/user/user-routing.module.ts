import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from 'src/app/core/guards/has-role.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { SuppliesListComponent } from './pages/supplies-list/supplies-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'services', component: ServicesListComponent,
        canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        }
      },
      {
        path: 'supplies', component: SuppliesListComponent,
        canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        }
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
