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
  



  constructor(
    private router: Router,
    public service: VehicleService,
  ) { }

  ngOnInit()  { 


    
   }

   

   goToHome() {
    this.router.navigate(['/']);

}
}