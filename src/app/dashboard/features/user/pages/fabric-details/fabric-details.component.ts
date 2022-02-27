import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowCircleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private supplyService: SuppliesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.supplyService.getFabricById(id).subscribe(data => {
        this.fabric = data as Fabric;
        console.log(this.fabric);
      });

    });
  }

}
