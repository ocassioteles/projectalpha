import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/data-form/data-form.module';
import { Vehicle } from 'src/app/services/vehicle.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formCar!: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit()  { 
    this.createForm(new Car ());
   }

   goToHome() {
    this.router.navigate(['/']);
   }

   createForm(car: Car) {
    this.formCar = new FormGroup({
    nome: new FormControl(car.nome),
    ano: new FormControl(car.ano),
    combustivel: new FormControl(car.combustivel),
    marca: new FormControl(car.marca)
    })

}

onSubmit(){
  console.log(this.formCar.value)
}

}
