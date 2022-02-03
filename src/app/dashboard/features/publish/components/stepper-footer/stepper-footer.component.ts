import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, } from '@angular/core';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-stepper-footer',
  templateUrl: './stepper-footer.component.html',
  styleUrls: ['./stepper-footer.component.css']
})
export class StepperFooterComponent implements OnInit, OnChanges {

  @Input() steps!: number;
  @Input() currentStep!: number;
  @Input() valid!: boolean;
  @Output() onStep =  new EventEmitter<number>();
  prevBtnVisibility = ''
  nextBtnVisibility = ''

  /* ICONO */
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  constructor() { }
 

  ngOnInit(): void {
   this.prevBtnVisibility = 'hidden';
   this.nextBtnVisibility = 'visible';  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentStep > 1) {
      this.prevBtnVisibility = 'visible';
      this.nextBtnVisibility = 'visible';
      if (this.currentStep >= this.steps)
        this.nextBtnVisibility = 'hidden';
    }
    else {
      this.prevBtnVisibility = 'hidden';
      this.nextBtnVisibility = 'visible';
    }    
  }

  next(){
    this.onStep.emit(1)
  }

  prev(){
    this.onStep.emit(-1)
  }
  

}
