import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="http://localhost:8080/api/brands/getallbrand";

  constructor(private httpClient:HttpClient) { }

  getBrand():Observable<BrandResponseModel>{
  return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }

}
