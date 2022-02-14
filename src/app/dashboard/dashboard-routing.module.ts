import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './features/user/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'user', loadChildren: () => import('./features/user/user.module').then(x => x.UserModule) },
      { path: 'publish', loadChildren: () => import('./features/publish/publish.module').then(x => x.PublishModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
