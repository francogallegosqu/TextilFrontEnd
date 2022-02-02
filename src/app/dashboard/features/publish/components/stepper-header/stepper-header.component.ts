import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.css']
})
export class StepperHeaderComponent implements OnInit {

  @Input() steps!: number;
  @Input() currentStep!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
