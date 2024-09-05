import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CricleComponent } from './cricle/cricle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilpkartComponent } from './filpkart/filpkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FilpkartPageComponent } from './filpkart-page/filpkart-page.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateaccountComponent } from './create-account/createaccount.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { AmazonComponent } from './amazon/amazon.component';
import { TodoComponent } from './todo/todo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard' ,canActivate:[AuthenticationGuard] ,component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'data-binding',component:DataBindingComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'Rectangle',component:RectangleComponent},
  {path:'circle',component:CricleComponent},
  {path:'bmi',component:BmiComponent},
  {path:'dice',component:DiceComponent},
  {path:'directive-pipes',component:DirectivesPipesComponent},
  {path:'Employees',component:EmployeesComponent},
  {path:'filpkart',component:FilpkartComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'filpkart-page',component:FilpkartPageComponent},
  {path:'createvehicle',component:CreateVehicleComponent},
  {path:'createaccount',component:CreateaccountComponent},
  {path:'viewvehicle/:id',component:ViewvehicleComponent},
  {path:'editvehicle/:id',component:CreateVehicleComponent},
  {path:'viewaccount/:id',component:ViewaccountComponent},
  {path:'editaccount/:id',component:CreateaccountComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'student-data',component:StudentDataComponent},
  {path:'parent',component:ParentComponent},
  {path:'sibling',component:SiblingComponent},
  {path:'amazon',component:AmazonComponent},
  {path:'todo',component:TodoComponent},
  {path:'aboot-company',component:AboutCompanyComponent},
  {path:'',component:WelcomeComponent}
  ]},
  {path:"", component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
