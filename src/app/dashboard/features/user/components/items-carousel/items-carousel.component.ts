import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';
import { Image } from '../../models/image';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-items-carousel',
  templateUrl: './items-carousel.component.html',
  styleUrls: ['./items-carousel.component.css']
})
export class ItemsCarouselComponent implements OnInit {

  @Input() id!: string;
  images: string[] = [];
  faCirclePlus = faPlusCircle

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
      this.imageService.getImagesById(this.id).subscribe(data => {
      let imgList = data as Image[]
      imgList.forEach(img => {
        this.images.push(img.urlImage)
      });
    })
  }

}
