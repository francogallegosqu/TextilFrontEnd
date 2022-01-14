import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangeEmailComponent } from './pages/profile/change-email/change-email.component';
import { UserGuard } from './services/user-guard.guard';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [UserGuard] },
  {
    path: 'profile/changeEmail',
    component: ChangeEmailComponent,
    canActivate: [UserGuard],
  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
