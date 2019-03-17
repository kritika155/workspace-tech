import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  customer:any={
    name:"",
    email:"",
    phone:"",
    address:"",
};

  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit() {
  
  }
  addCustomer(customer){
    this.customerService.addCustomer(customer);
    this.customerService.getCustomers();
    this.router.navigate(['/list-customer']);
  }
  
}
