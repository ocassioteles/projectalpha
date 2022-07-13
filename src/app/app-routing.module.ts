import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './views/list/list.component';
import { RegistrationComponent } from './views/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'List', component: ListComponent },
  { path: 'Registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
