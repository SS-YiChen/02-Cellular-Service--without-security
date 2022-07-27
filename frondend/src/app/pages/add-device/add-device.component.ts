import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/class/device';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DeviceService } from 'src/app/service/deviceservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styles: [
  ]
})
export class AddDeviceComponent implements OnInit {

  device: Device = new Device();

  constructor(private deviceService: DeviceService, private router:Router) { }

  ngOnInit(): void {
  }

  saveDevice(){
    this.deviceService.createDevice(this.device).subscribe( data => {
      console.log(data);
      this.goToDeviceList();
    },
    error => console.log(error));
  }

  goToDeviceList(){
    this.router.navigate(['/device'])
  }

  onSubmit(){
    console.log(this.device);
    this.saveDevice();
  }

}
