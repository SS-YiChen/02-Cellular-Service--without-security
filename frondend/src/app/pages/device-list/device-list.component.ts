import { Component, OnInit } from '@angular/core';
import {Device} from '../../class/device';
import { DeviceService } from 'src/app/service/deviceservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styles: [
  ]
})
export class DeviceListComponent implements OnInit {

  devices: Device[] = [];

  constructor(private deviceService: DeviceService, private router:Router ) { }

  ngOnInit(): void {
    this.getDevices();
  //   this.devices = [{
  //     "id": 1,
  //     "name": "iphone",
  //     "number" : 1111,
  //     "user": "test"
  //   },
  //   {
  //     "id": 2,
  //     "name": "iphone13",
  //     "number" : 2222,
  //     "user": "mike"
  //   }
  // ]
  }

  private getDevices() {
    this.deviceService.getDeviceList().subscribe(data =>{
      this.devices=data;
    })
  }

  updateDevice(id: number){
    this.router.navigate(['updatedevice', id]);
  }


  deleteDevice (id:number){
    this.deviceService.deleteDevice(id).subscribe( data => {
      console.log(data);
      this.getDevices();
    })
  } 

  viewDevice(id: number){

  }


}
