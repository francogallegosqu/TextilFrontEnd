import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BackButtonDirective } from './directives/back-button.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BackButtonDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    NavbarComponent,
    FontAwesomeModule,
    FooterComponent,
    BackButtonDirective
  ]
})
export class SharedModule { }
