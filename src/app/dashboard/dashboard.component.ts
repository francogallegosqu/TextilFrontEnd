import { Component, OnInit } from '@angular/core';
import {
  faBell,
  faBullhorn,
  faChevronDown,
  faCompass,
  faPlusCircle,
  faQuestionCircle,
  faStoreAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  faExplorar = faCompass;
  faClientes = faUser;
  faProveedores = faStoreAlt;
  faNotificaciones = faBell;
  faAyuda = faQuestionCircle;
  faPublicar = faBullhorn;
  faPublicaciones = faPlusCircle;
  faChevronDown = faChevronDown;
  role = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }
}
