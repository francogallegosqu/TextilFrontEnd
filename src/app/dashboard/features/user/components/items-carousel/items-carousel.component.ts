import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ImgHostingService } from 'src/app/core/services/img-hosting.service';

@Component({
  selector: 'app-items-carousel',
  templateUrl: './items-carousel.component.html',
  styleUrls: ['./items-carousel.component.css']
})
export class ItemsCarouselComponent implements OnInit {

  @Input() imagesUrl!: string[];
  images: string[] = [];
  constructor(private imgService: ImgHostingService) { }

  ngOnInit(): void {
    this.images.push("assets/images/avatar-1.png");
    this.images.push("assets/images/avatar-2.png");
    this.images.push("assets/images/avatar-3.png");

  }

}
