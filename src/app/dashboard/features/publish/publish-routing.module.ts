import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './pages/service/service.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { PublishComponent } from './publish.component';

const routes: Routes = [
  {path: '', component: PublishComponent, children:[
   {path:'service', component: ServiceComponent},
   {path:'supplies', component: SuppliesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
