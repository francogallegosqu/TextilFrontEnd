import { Component, OnInit } from '@angular/core';
import { faCompass, faUser, faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  /******ICONOS *******/
  faExplorar = faCompass;
  faClientes = faUser;
  faProveedores = faStoreAlt;
  faNotificaciones = faBell;
  faAyuda = faQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
