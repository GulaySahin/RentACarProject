import { Component, OnInit } from '@angular/core';
import { CorporateCustomer } from 'src/app/models/corporateCustomer';
import { CorporateCustomerService } from 'src/app/services/corporateCustomer.service';

@Component({
  selector: 'app-corporate-customer',
  templateUrl: './corporate-customer.component.html',
  styleUrls: ['./corporate-customer.component.css']
})
export class CorporateCustomerComponent implements OnInit {

  corporateCustomers:CorporateCustomer[]=[];

  constructor(private corporateCustomerService:CorporateCustomerService) { }

  ngOnInit(): void {
    this.getCorporateCustomer();
  }

  getCorporateCustomer() {
    return this.corporateCustomerService.getCorporateCustomer().subscribe((response) => {
      this.corporateCustomers=response.data;
    })
  }

}
