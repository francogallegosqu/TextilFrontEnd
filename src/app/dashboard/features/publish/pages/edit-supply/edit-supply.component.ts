import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { SuppliesService } from 'src/app/core/services/supplies.service';
import { Accessory } from '../../../user/models/accessory';
import { Fabric } from '../../../user/models/fabric';

@Component({
  selector: 'app-edit-supply',
  templateUrl: './edit-supply.component.html',
  styleUrls: ['./edit-supply.component.css']
})
export class EditSupplyComponent implements OnInit {

  fabric!: Fabric
  accessory!: Accessory
  subCategories!: any
  type!: string
  id!: string
  formFabric!: FormGroup
  formAccessory!: FormGroup
  loading = true
  errorMessage!: string;

  constructor(private router: Router, private fb: FormBuilder, private suppliesService: SuppliesService, private categoryService: CategoryService, private route: ActivatedRoute, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.type = params['type']
      this.id = params['id'];

      this.categoryService.getAllSubcategories().subscribe((categories) => {
        this.subCategories = categories;

        if (this.type == "fabric") {
          this.suppliesService.getFabricById(this.id).subscribe((data) => {
            this.fabric = data as Fabric
            console.log(this.fabric)
            this.formFabric = this.fb.group({
              fabricName: [this.fabric.nameFabric, [Validators.required]],
              fabricDescription: [this.fabric.descriptionFabric, Validators.required],
              fabricPrice: [this.fabric.priceFabric, [Validators.required]],
              fabricMetersKg: [this.fabric.meters_x_Kg, [Validators.required]],
              fabricWidth: [this.fabric.widthFabric, [Validators.required]],
              fabricColor: [this.fabric.colorFabric, [Validators.required]],
              fabricTension: [this.fabric.tension, [Validators.required]],
              fabricComposition: [this.fabric.composition, [Validators.required]],
            })
            this.loading = false
          });

        } else {
          this.suppliesService.getAccessoryById(this.id).subscribe((data) => {
            this.accessory = data as Accessory;
            console.log(this.accessory)
            this.formAccessory = this.fb.group({
              accessoryName: [this.accessory.nameAccessory, [Validators.required]],
              accessoryDescription: [this.accessory.descriptionAccessory, Validators.required],
              accessoryCategory: [this.accessory.subcategory, [Validators.required]],
              accessoryPrice: [this.accessory.priceAccesory, [Validators.required]],
              accessoryColor: [this.accessory.colorAccessory, [Validators.required]],
            })
            this.loading = false
          });
        }
      });
    });

  }

  back() {
    if (this.type == "fabric") {
      this.router.navigate(['/dashboard/user/supplies/fabric', this.id])
    } else {
      this.router.navigate(['/dashboard/user/supplies/accessory', this.id])
    }
  }

  edit() {
    this.loading = true
    if (this.type == "fabric") {
      let fabric = {
        idFabric: this.id,
        priceFabric: this.formFabric.value.fabricPrice,
        meters_x_Kg: this.formFabric.value.fabricMetersKg,
        widthFabric: this.formFabric.value.fabricWidth,
        colorFabric: this.formFabric.value.fabricColor,
        nameFabric: this.formFabric.value.fabricName,
        descriptionFabric: this.formFabric.value.fabricDescription,
        tension: this.formFabric.value.fabricTension,
        composition: this.formFabric.value.fabricComposition,
        created_by: this.fabric.created_by,
        created_at: this.fabric.created_at,
        updated_at: new Date().toString(),
      };
      console.log("new fabric")
      console.log(fabric)
      this.suppliesService.putFabric(fabric).subscribe({
        next: (data) => {
          console.log(data)
          this.loading = false;
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.errorMessage = error.error.message;
          this.loading = false;
        },

      });
    } else {
      let accessory = {
        idAccessory: this.id,
        nameAccessory: this.formAccessory.value.accessoryName,
        descriptionAccessory: this.formAccessory.value.accessoryDescription,
        idSubcategory: this.formAccessory.value.accessoryCategory.idSubCategory,
        priceAccesory: this.formAccessory.value.accessoryPrice,
        colorAccessory: this.formAccessory.value.accessoryColor,
        created_by: this.accessory.created_by,
        created_at: this.accessory.created_at,
        updated_at: new Date().toString(),
      };
      console.log("new accessory")
      console.log(accessory)
      this.suppliesService.putAccessory(accessory).subscribe({
        next: (data) => {
          console.log(data)
          this.loading = false;
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
