import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Device } from '../schema/device';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Bluetooth } from '@data/schema/bluetooth';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(
    private bluetoothSerial: BluetoothSerial
  ) { }

  isConnect(): Observable<boolean> {
    return of(false);
  }

  setDevice(device: Device) { }

  listBluetooth(): Observable<Bluetooth[]> {
    return from(this.bluetoothSerial.list());
  }
}