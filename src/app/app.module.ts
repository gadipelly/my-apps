import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CricleComponent } from './cricle/cricle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilpkartComponent } from './filpkart/filpkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FilpkartPageComponent } from './filpkart-page/filpkart-page.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateaccountComponent } from './create-account/createaccount.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon1Component } from './amazon1/amazon1.component';
import { Amazon2Component } from './amazon2/amazon2.component';
import { Amazon3Component } from './amazon3/amazon3.component';
import { Amazon4Component } from './amazon4/amazon4.component';
import { TodoComponent } from './todo/todo.component';
// import { Todo1Component } from './todo1/todo1.component';
// import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';
import { AboutUsModule } from './about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CricleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployeesComponent,
    FilpkartComponent,
    VehiclesComponent,
    AccountsComponent,
    FilpkartPageComponent,
    CreateVehicleComponent,
    CreateaccountComponent,
    ViewvehicleComponent,
    ViewaccountComponent,
    CreateUserComponent,
    StudentDataComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    SiblingComponent,
    Sibling1Component,
    Sibling2Component,
    AmazonComponent,
    Amazon1Component,
    Amazon2Component,
    Amazon3Component,
    Amazon4Component,
    TodoComponent,
    // Todo1Component,
    // Todo2Component,
    Todo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
