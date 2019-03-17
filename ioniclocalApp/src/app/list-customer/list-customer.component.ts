import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  customer:any={
    id:'',
    name:"",
    email:"",
    phone:"",
    address:"",
};
customers: any = [
  {id:1, name:'kritika',email:'kritikaroy@gmail.com', phone:'09038187690', address:"India"},
  {id:2, name:'Ashish',email:'ashishroy@gmail.com',phone:'09038187691' ,address:"India"}
]
list=[];
  constructor(private customerService: CustomerService,private router :Router) { }
  ngOnInit() {
   
  
    this.list=this.customerService.getCustomers();
  
}
onEdit(customer)
{
  this.router.navigate(['./editcustomer/'+customer.id]); 
}

deleteCustomer(customer){
 this.customerService.deleteCustomer(customer);
 this.list=this.customerService.getCustomers();
}
}
  
 


