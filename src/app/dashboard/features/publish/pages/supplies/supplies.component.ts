import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { CompositionService } from 'src/app/core/services/composition.service';
import { SuppliesService } from 'src/app/core/services/supplies.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
})
export class SuppliesComponent implements OnInit {
  steps: number = 4;
  currentStep: number = 1;
  user!: User;
  supplyTypes = ['Accesorio', 'Tela'];
  formStepOne!: FormGroup;
  formAccessoryStepTwo!: FormGroup;
  formAccessoryStepThree!: FormGroup;
  formAccessoryStepFour!: FormGroup;

  formFabricStepTwo!: FormGroup;
  formFabricStepThree!: FormGroup;
  formFabricStepFour!: FormGroup;

  subCategories!: any;
  compositions!: any;
  errorMessage!: string;
  registered!: boolean;
  loading = false;
  name = '';

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private supplyService: SuppliesService,
    private compositionService: CompositionService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.user = this.authService.getUser()!;

    this.formStepOne = this.fb.group({
      supplyType: ['', [Validators.required]],
    });

    this.formAccessoryStepTwo = this.fb.group({
      accessoryName: ['', [Validators.required]],
      accessoryDescription: ['', Validators.required],
    });

    this.formFabricStepTwo = this.fb.group({
      fabricName: ['', [Validators.required]],
      fabricDescription: ['', Validators.required],
    });

    this.formAccessoryStepThree = this.fb.group({
      accessoryCategory: ['', [Validators.required]],
    });

    this.formFabricStepThree = this.fb.group({
      fabricCategory: ['', [Validators.required]],
    });

    this.formAccessoryStepFour = this.fb.group({
      accessoryPrice: ['', [Validators.required]],
      accessoryColor: ['#563d7c', [Validators.required]],
    });

    this.formFabricStepFour = this.fb.group({
      fabricPrice: ['', [Validators.required]],
      fabricMetersKg: ['', [Validators.required]],
      fabricWidth: ['', [Validators.required]],
      fabricColor: ['#563d7c', [Validators.required]],
      fabricTension: ['', [Validators.required]],
      fabricComposition: ['', [Validators.required]],
    });

    this.categoryService.getAllSubcategories().subscribe((data) => {
      this.subCategories = data;
    });

    this.compositionService.getAllCompositions().subscribe((data) => {
      this.compositions = data;
      console.log(this.compositions);
    });
  }

  onStep(step: number) {
    this.currentStep = this.currentStep + step;
  }

  activateNext(): boolean {
    if (this.currentStep == 1) {
      return this.formStepOne.invalid;
    } else if (this.formStepOne.value.supplyType == 'Accesorio') {
      if (this.currentStep == 2) {
        return this.formAccessoryStepTwo.invalid;
      }
      if (this.currentStep == 3) {
        return this.formAccessoryStepThree.invalid;
      }
      if (this.currentStep == 4) {
        return this.formAccessoryStepFour.invalid;
      }
    } else if (this.formStepOne.value.supplyType == 'Tela') {
      if (this.currentStep == 2) {
        return this.formFabricStepTwo.invalid;
      }
      if (this.currentStep == 3) {
        return this.formFabricStepThree.invalid;
      }
      if (this.currentStep == 4) {
        return this.formFabricStepFour.invalid;
      }
    }
    return true;
  }

  createSupply() {
    this.loading = true;

    if (this.formStepOne.value.supplyType == 'Accesorio') {
      let accessory = {
        nameAccessory: this.formAccessoryStepTwo.value.accessoryName,
        descriptionAccessory: this.formAccessoryStepTwo.value.accessoryDescription,
        idSubcategory: this.formAccessoryStepThree.value.accessoryCategory,
        priceAccesory: this.formAccessoryStepFour.value.accessoryPrice,
        colorAccessory: this.formAccessoryStepFour.value.accessoryColor,
        created_by: this.user.idUsuario,
        created_at: new Date().toString(),
      };
      this.name = this.formAccessoryStepTwo.value.accessoryName;
      this.supplyService.postAccessory(accessory).subscribe({
        next: (data) => {
          console.log(data);
          this.registered = true;
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.errorMessage = error.error.message;
          this.loading = false;
        },
      });
    } else {
      let fabric = {
        priceFabric: this.formFabricStepFour.value.fabricPrice,
        meters_x_Kg: this.formFabricStepFour.value.fabricMetersKg,
        widthFabric: this.formFabricStepFour.value.fabricWidth,
        colorFabric: this.formFabricStepFour.value.fabricColor,
        nameFabric: this.formFabricStepTwo.value.fabricName,
        descriptionFabric: this.formFabricStepTwo.value.fabricDescription,
        tension: this.formFabricStepFour.value.fabricTension,
        idComposition: this.formFabricStepFour.value.fabricComposition,
        created_by: this.user.idUsuario,
        created_at: new Date().toString(),
      };
      this.name = this.formFabricStepTwo.value.fabricName;
      this.supplyService.postFabric(fabric).subscribe({
        next: (data) => {
          console.log(data);
          this.registered = true;
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.errorMessage = error.error.message;
          this.loading = false;
        },
      });
    }
  }
}
