import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/tele/user";

  constructor(private httpClient: HttpClient) { }

  getDeviceList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`)
  }
}
