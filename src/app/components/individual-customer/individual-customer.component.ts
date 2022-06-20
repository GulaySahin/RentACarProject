import { Component, OnInit } from '@angular/core';
import { IndividualCustomer } from 'src/app/models/individualCustomer';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';

@Component({
  selector: 'app-individual-customer',
  templateUrl: './individual-customer.component.html',
  styleUrls: ['./individual-customer.component.css']
})
export class IndividualCustomerComponent implements OnInit {

  individualCustomers:IndividualCustomer[]=[];

  constructor(private individualCustomerService:IndividualCustomerService) { }

  ngOnInit(): void {
    this.getIndividualCustomer();
  }

  getIndividualCustomer() {
    this.individualCustomerService.getIndividualCustomer().subscribe((response) => {
      this.individualCustomers=response.data;
    })
  }

}
