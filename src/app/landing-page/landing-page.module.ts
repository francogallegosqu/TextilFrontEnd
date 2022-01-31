import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselImgComponent } from './components/carousel-img/carousel-img.component';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    CarouselImgComponent,
    CardComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRoutingModule,
  ]
})
export class LandingPageModule { }
