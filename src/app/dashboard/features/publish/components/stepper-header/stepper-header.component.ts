import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.css']
})
export class StepperHeaderComponent implements OnInit, OnChanges {

  @Input() steps!: number;
  @Input() currentStep!: number;
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

}
