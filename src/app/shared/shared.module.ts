import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    NavbarComponent,
    FontAwesomeModule,
    FooterComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
