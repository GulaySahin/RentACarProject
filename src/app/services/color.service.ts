import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="http://localhost:8080/api/colors/getallcolor";

  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
