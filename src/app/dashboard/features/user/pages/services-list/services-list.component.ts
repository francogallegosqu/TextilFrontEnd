import { Component, OnInit } from '@angular/core';
import { faAngleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  faAngleDown = faAngleDown;
  services!: Service[];
  faCirclePlus = faPlusCircle
  constructor(private authService: AuthService, private servService: ServicesService) { }

  ngOnInit(): void {
    this.servService.getAllServicesByUserId(this.authService.getUser()?.idUsuario!).subscribe(data => {
      this.services = data as Service[];
    })
  }

}
