import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  steps: number = 3;
  currentStep: number = 1; 
  constructor() { }

  ngOnInit(): void {
  }

  onStep(step: number){
    this.currentStep = this.currentStep + step
  }
}
