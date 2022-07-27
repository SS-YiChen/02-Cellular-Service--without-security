import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../class/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseUrl = "http://localhost:8080/tele/device";

  constructor(private httpClient: HttpClient) { }

  getDeviceList(): Observable<Device[]>{
    return this.httpClient.get<Device[]>(`${this.baseUrl}`)
  }

  createDevice(device:Device): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, device)
  }

  getDeviceById(id: number): Observable<Device>{
    return this.httpClient.get<Device>(`${this.baseUrl}/${id}`);
  }

  updateDevice(id: number, device: Device) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,device);
  }

  deleteDevice(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
