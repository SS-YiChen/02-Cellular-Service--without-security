import { TestBed } from '@angular/core/testing';

import { DeviceService } from './deviceservice.service';

describe('DeviceserviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
