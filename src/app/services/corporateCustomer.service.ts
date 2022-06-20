import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CorporateCustomerResponseModel } from '../models/CorporateCustomerReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {

  apiUrl="http://localhost:8080/corporatecustomers/getall";

  constructor(private httpClient:HttpClient) { }

  getCorporateCustomer():Observable<CorporateCustomerResponseModel> {
    return this.httpClient.get<CorporateCustomerResponseModel>(this.apiUrl);
  }
}
