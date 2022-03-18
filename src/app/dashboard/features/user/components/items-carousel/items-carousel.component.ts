import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'app-items-carousel',
  templateUrl: './items-carousel.component.html',
  styleUrls: ['./items-carousel.component.css']
})
export class ItemsCarouselComponent implements OnInit {

  @Input() id!: string;
  images: string[] = [];
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images.push("assets/images/avatar-1.png");
    this.images.push("assets/images/avatar-2.png");
    this.images.push("assets/images/avatar-3.png");
    this.imageService.getImagesById(this.id).subscribe(data => {
      let imgList = data as Image[]
      imgList.forEach(img => {
        this.images.push(img.urlImage)
      });
    })
  }

}
