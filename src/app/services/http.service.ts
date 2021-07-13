import { HttpParams,HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment as env} from '../../environments/environment'
import { Schematic } from '../interfaces/schematic';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  statistics(country?: string): Observable<Schematic>{
    console.log(country)
    if (country) {
      let params = new HttpParams().set('country', country);
     
      return this.http.get<Schematic>(`${env.BASE_URL}/statistics`, { params: params });
    } else {
      
      return this.http.get<Schematic>(`${env.BASE_URL}/statistics`);
     
    }
  }
}
