import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowCircleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private supplyService: SuppliesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.supplyService.getAccessoryById(id).subscribe(data => {
        this.accessory = data as Accessory;
        console.log(this.accessory);
      });
    });
  }


}
