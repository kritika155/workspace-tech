import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { AddCustomerComponent } from './add-customer/add-customer.component'
import { ListCustomerComponent } from './list-customer/list-customer.component'
import { CustomerComponent } from './customer/customer.component'
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import { StudentComponent } from './student/student.component'
import {ListStudentComponent} from './list-student/list-student.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'customer',component:CustomerComponent},
  {path:'list-customer',component:ListCustomerComponent},
  {path:'add-customer',component:AddCustomerComponent},
  {path:'editcustomer/:id',component:EditCustomerComponent},
  {path:'student',component:StudentComponent},
  {path:'list-student',component:ListStudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path: 'edit-student/:rollno', component:EditStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
