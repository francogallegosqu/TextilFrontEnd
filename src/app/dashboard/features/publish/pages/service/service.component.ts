import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  steps: number = 3;
  currentStep: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  onStep(step: number){
    this.currentStep = this.currentStep + step
  }
}
