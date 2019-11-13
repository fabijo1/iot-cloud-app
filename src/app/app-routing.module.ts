import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { TempComponent } from './measurements/temp/temp.component';




const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo : '/dashboard', pathMatch: 'full'},
  {path: 'measurements', children: [
    {
      path: 'temperature', component: TempComponent
    }
  ]},
  {
    path : 'measurements', redirectTo : 'measurements/temperature', pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
