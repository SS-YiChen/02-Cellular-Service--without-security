import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../class/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private baseUrl = "http://localhost:8080/tele/plan";

  constructor(private httpClient: HttpClient) { }

  getDeviceList(): Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(`${this.baseUrl}`)
  }
}
