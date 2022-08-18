import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/services/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  vehicles: Array<Vehicle>=[
    {  age: 1994 , name: 'Uno'  , fuel: 'gasolina' },
    {  age: 2013 , name: 'Sonic'  , fuel: 'flex' , brand: 'Chevrolet'},
    {  age: 2010 , name: 'Gol'  , fuel: 'flex' },
    {  age: 1992 , name: 'Kadett'  , fuel: 'alcool' , brand: 'Chevrolet'},
    {  age: 2020 , name: 'Civic'  , fuel: 'flex' }
  ]


  constructor(
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit()  { 
   }

   

   goToHome() {
    this.router.navigate(['/']);

}
}