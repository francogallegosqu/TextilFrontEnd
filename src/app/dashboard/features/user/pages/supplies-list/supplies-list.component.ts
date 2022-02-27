import { Component, OnInit } from '@angular/core';
import { faAngleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { SuppliesService } from 'src/app/core/services/supplies.service';
import { Accessory } from '../../models/accessory';
import { Fabric } from '../../models/fabric';
import { Service } from '../../models/service';

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.css'],
})
export class SuppliesListComponent implements OnInit {
  user!: User;
  faAngleDown = faAngleDown;
  fabrics!: Fabric[];
  accessories!: Accessory[];
  services!: Service[];
  faCirclePlus = faPlusCircle

  constructor(private authService: AuthService, private suppliesService: SuppliesService, private servService: ServicesService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()!;
    this.suppliesService.getAccessoriesByUserId(this.user.idUsuario!).subscribe(data => {
      this.accessories = data as Accessory[];
      console.log(this.accessories)
    })
    this.suppliesService.getFabricsByUserId(this.user.idUsuario!).subscribe(data => {
      this.fabrics = data as Fabric[];
      console.log(this.fabrics)
    })
    this.servService.getAllServicesByUserId(this.authService.getUser()?.idUsuario!).subscribe(data => {
      this.services = data as Service[];
    })
  }
}
