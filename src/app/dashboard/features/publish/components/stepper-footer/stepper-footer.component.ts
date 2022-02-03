import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper-footer',
  templateUrl: './stepper-footer.component.html',
  styleUrls: ['./stepper-footer.component.css'],
})
export class StepperFooterComponent implements OnInit, OnChanges {
  @Input() steps!: number;
  @Input() currentStep!: number;
  @Input() valid!: boolean;
  @Output() onStep = new EventEmitter<number>();
  prevBtnVisibility = '';
  nextBtnVisibility = '';
  lastStep!: boolean;

  /* ICONO */
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;

  constructor() {}

  ngOnInit(): void {
    this.lastStep = this.steps <= 1 ? true : false;
    this.prevBtnVisibility = 'hidden';
    this.nextBtnVisibility = 'visible';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentStep > 1) {
      this.prevBtnVisibility = 'visible';
      this.nextBtnVisibility = 'visible';
      if (this.currentStep >= this.steps) {
        this.nextBtnVisibility = 'hidden';
        this.lastStep = true;
      }
    } else {
      this.lastStep = false;
      this.prevBtnVisibility = 'hidden';
      this.nextBtnVisibility = 'visible';
    }
    console.log('last', this.lastStep);
    console.log('current', this.currentStep);
    console.log('steps', this.steps);
  }

  next() {
    this.onStep.emit(1);
  }

  prev() {
    this.onStep.emit(-1);
  }
}
