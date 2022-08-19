import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.interface';
// import { Http, Headers, Response } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class VehicleService {

  private vehiclesUrl : string = 'app/clientes';
  private headers: Headers = new Headers ({'Content-Type' : 'application/json'})

  saveUser() {

  }

  teste123=0;

  vehicle: Array<Vehicle>=[
    {  age: 1994 , name: 'Uno'  , fuel: 'Gasolina' },
    {  age: 2013 , name: 'Sonic'  , fuel: 'Flex' , brand: 'Chevrolet'},
    {  age: 2010 , name: 'Gol'  , fuel: 'Flex' },
    {  age: 1998 , name: 'Kadett'  , fuel: 'Álcool' , brand: 'Chevrolet'},
    {  age: 2020 , name: 'Civic'  , fuel: 'Flex' }
  ]

  
  static vehicle: any;
  constructor(
   
    // private http: Http
    ) { }

  createForm(vehicle: Vehicle) {

  }






//   public Salvar (data: Vehicle){
//     localStorage.setItem(data.name.toString(), JSON.stringify(data));
//   }

//   update(vehicle: Vehicle): Promise<Vehicle> {
//     const url = `${this.vehiclesUrl}/${vehicle.name}`; //app/cliente/:id
//     return this.http
//     .put(url, JSON.stringify(vehicle), {headers:this.headers})
//     .toPromise()
//     .then(() => vehicle as Vehicle);
//   }

//   getVehicles() : Promise<Vehicle[]> {
//     return this.http.get(this.vehiclesUrl) 
//       .toPromise()
//       .then(response => response.json().data as Vehicle[])
//       .catch(this.trataErro);
//    }

//    private trataErro(err : any) : Promise<any> {
//     return Promise.reject(err.message || err );
//   }

//   getCliente(name:string): Promise<Vehicle> {
//     return this.getVehicles()
//     .then((vehicles: Vehicle[]) => VehicleService.vehicle.find(vehicles => vehicles.name === name)); 
//    }

//    create(vehicle: Vehicle): Promise<Vehicle> {
//     return this.http.post(this.vehiclesUrl, JSON.stringify(vehicle), {headers:this.headers})
//     .toPromise()
//     .then((response : Response) => {
//         console.log(response.json().data);
//         return response.json().data as Vehicle;  
//     })
//     .catch(this.trataErro);
// }
}


