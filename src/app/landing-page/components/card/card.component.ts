import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item!: Item;
  @Input() tipo!: string;
  constructor() { }

  ngOnInit(): void {

  }

}
