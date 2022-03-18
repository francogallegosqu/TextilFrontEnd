import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowCircleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from 'src/app/core/services/image.service';
import { ImgHostingService } from 'src/app/core/services/img-hosting.service';
import { SuppliesService } from 'src/app/core/services/supplies.service';
import { Accessory } from '../../models/accessory';

@Component({
  selector: 'app-accessory-details',
  templateUrl: './accessory-details.component.html',
  styleUrls: ['./accessory-details.component.css']
})
export class AccessoryDetailsComponent implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft;
  faLayerGroup = faLayerGroup;
  accessory!: Accessory;
  selectedImage!: File;

  constructor(private imgHostingService: ImgHostingService, private imgService: ImageService, private supplyService: SuppliesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.supplyService.getAccessoryById(id).subscribe(data => {
        this.accessory = data as Accessory;
        console.log(this.accessory);
      });
    });
  }
  onFileSelected(event: any) {
    this.selectedImage = <File>event.target.files[0]
  }

  onUpload() {
    this.imgHostingService.postImage(this.selectedImage).subscribe((res: any) => {
      let image = {
        typeImage: this.accessory.idAccessory,
        urlImage: res.url,
        created_at: new Date().toString(),
        created_by: this.accessory.created_by
      }
      this.imgService.postImageById(image).subscribe(data => {
        window.location.reload();
      })
    })
  }

}
