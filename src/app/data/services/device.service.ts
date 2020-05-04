import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from '../schema/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor() { }

  isConnect(): Observable<boolean> {
    return of(false);
  }

  setDevice(device: Device) { }
}