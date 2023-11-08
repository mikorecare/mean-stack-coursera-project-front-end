import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"add-employee",
        component:AddEmployeeComponent
      },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ]
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
