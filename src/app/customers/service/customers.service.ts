import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/'



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  addCustomer(customer:any): Observable<any> {
    console.log("Add Customer method")
    console.log(customer);
    return this.http.post(BASIC_URL + "customer", customer)
  }
}
