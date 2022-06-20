import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndividualCustomerResponseModel } from '../models/individualCustomerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {

  apiUrl="http://localhost:8080/api/individualcustomers/getall";

  constructor(private httpClient:HttpClient) { }

  getIndividualCustomer():Observable<IndividualCustomerResponseModel> {
    return this.httpClient.get<IndividualCustomerResponseModel>(this.apiUrl);
  }

}
