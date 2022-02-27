import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowCircleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft;
  faLayerGroup = faLayerGroup;
  service!: Service;
  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let serviceId = params['id'];
      this.servicesService.getServiceById(serviceId).subscribe(data => {
        this.service = data as Service;
        console.log(this.service);
      });

    });
  }

}
