import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/services/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formCar!: FormGroup;

  constructor(
    private router: Router,
    private service: VehicleService
  ) { }

  ngOnInit() {
    this.createForm();

    console.log(this.service.vehicle);


  }

  goToHome() {
    this.router.navigate(['/']);
  }

  createForm() {
    this.formCar = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(),
      fuel: new FormControl(""),
      brand: new FormControl("")
    })

  }

  onSubmit() {


    const vehicleObject: Vehicle = {
      age: this.formCar.controls['age'].value,
      fuel: this.formCar.controls['fuel'].value,
      name: this.formCar.controls['name'].value,
      brand: this.formCar.controls['brand'].value
    }


    this.service.vehicle.push(vehicleObject)


  }

}
