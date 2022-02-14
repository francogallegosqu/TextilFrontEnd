import { Component, Input, OnInit } from '@angular/core';
import { Accessory } from '../../models/accessory';
import { Fabric } from '../../models/fabric';

@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit {

  @Input() supply!: Fabric | Accessory;
  
  constructor() { }

  ngOnInit(): void {
  }

}
