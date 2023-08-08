import { Injectable } from '@angular/core';
import { FETCH_ALL_USERS } from './api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUSers(): Observable<any[]> {
    return this.http.get<any[]>(FETCH_ALL_USERS);
  }
}
