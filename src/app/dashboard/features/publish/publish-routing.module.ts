import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from 'src/app/core/guards/has-role.guard';
import { ServiceComponent } from './pages/service/service.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { PublishComponent } from './publish.component';

const routes: Routes = [
  {
    path: '', component: PublishComponent, children: [
      {
        path: 'service', component: ServiceComponent,
        canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        }
      },
      {
        path: 'supply', component: SuppliesComponent,
        canActivate: [HasRoleGuard],
        data: {
          role: 'Vendedor'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
