import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowCircleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from 'src/app/core/services/image.service';
import { ImgHostingService } from 'src/app/core/services/img-hosting.service';
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
  selectedImage!: File;
  constructor(private imgHostingService: ImgHostingService, private imgService: ImageService, private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let serviceId = params['id'];
      this.servicesService.getServiceById(serviceId).subscribe(data => {
        this.service = data as Service;
        console.log(this.service);
      });

    });
  }

  onFileSelected(event: any) {
    this.selectedImage = <File>event.target.files[0]
  }

  onUpload() {
    this.imgHostingService.postImage(this.selectedImage).subscribe((res: any) => {
      let image = {
        typeImage: this.service.idService,
        urlImage: res.url,
        created_at: new Date().toString(),
        created_by: this.service.created_by
      }
      this.imgService.postImageById(image).subscribe(data => {
        window.location.reload();
      })
    })
  }

}
