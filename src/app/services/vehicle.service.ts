import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.interface';

@Injectable({ providedIn: 'root' })
export class VehicleService {

  saveUser() {

  }

  teste123=0;

  vehicle: Array<Vehicle>=[
    {  age: 1994 , name: 'Uno'  , fuel: 'gasolina' },
    {  age: 2013 , name: 'Sonic'  , fuel: 'flex' , brand: 'Chevrolet'},
    {  age: 2010 , name: 'Gol'  , fuel: 'flex' },
    {  age: 1992 , name: 'Kadett'  , fuel: 'alcool' , brand: 'Chevrolet'},
    {  age: 2020 , name: 'Civic'  , fuel: 'flex' }
  ]
  static vehicle: any;
  constructor(private vehicleService: VehicleService) { }

}


