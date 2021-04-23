import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from './data';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  public getValues(){
    const dataUrl = 'https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users';
    return this.http.get<Data[]>(dataUrl);
  }
  loadEmployes(id: string) {
    return this.http.get<Data>('https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users/1' + id);
  }

  // user registration
    public registerUser(user, id) {
        return this.http.post('https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users/' + id, user, {responseType: 'text' as 'json'});
    }

}


