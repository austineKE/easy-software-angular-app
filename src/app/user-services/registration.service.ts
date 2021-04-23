import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {

  }
  public registerUser(user) {
    return this.http.post('http://localhost:8080/api/v1/user/create', user, {responseType: 'text' as 'json'});
  }

  public getUsers(){
    const userUrl = 'http://localhost:8080/api/v1/users';
    return this.http.get<User[]>(userUrl);
  }

}


