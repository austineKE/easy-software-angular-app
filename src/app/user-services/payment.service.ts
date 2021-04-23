import { Injectable } from '@angular/core';
import { Payment } from '../payment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public pay(payment) {
    return this.http.post('http://localhost:8080/api/v2/payment', payment, {responseType: 'text' as 'json'});
  }

}
