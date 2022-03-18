import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowCircleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { bindNodeCallback } from 'rxjs';
import { ImageService } from 'src/app/core/services/image.service';
import { ImgHostingService } from 'src/app/core/services/img-hosting.service';
import { SuppliesService } from 'src/app/core/services/supplies.service';
import { Fabric } from '../../models/fabric';

@Component({
  selector: 'app-fabric-details',
  templateUrl: './fabric-details.component.html',
  styleUrls: ['./fabric-details.component.css']
})
export class FabricDetailsComponent implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft;
  faLayerGroup = faLayerGroup;
  fabric!: Fabric;
  selectedImage!: File
  constructor(private imgHostingService: ImgHostingService, private imgService: ImageService, private supplyService: SuppliesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.supplyService.getFabricById(id).subscribe(data => {
        this.fabric = data as Fabric;
        console.log(this.fabric);
      });

    });
  }

  onFileSelected(event: any) {
    this.selectedImage = <File>event.target.files[0]
  }

  onUpload() {
    this.imgHostingService.postImage(this.selectedImage).subscribe((res: any) => {
      let image = {
        typeImage: this.fabric.idFabric,
        urlImage: res.url,
        created_at: new Date().toString(),
        created_by: this.fabric.created_by
      }
      this.imgService.postImageById(image).subscribe(data => {
        window.location.reload();
      })
    })
  }

}
