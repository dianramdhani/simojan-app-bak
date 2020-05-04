import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { Device } from '../schema/device';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Bluetooth } from '@data/schema/bluetooth';
import { SurveyService } from './survey.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public connectSubject = new BehaviorSubject(false);

  constructor(
    private bluetoothSerial: BluetoothSerial,
    private surveyService: SurveyService
  ) { }

  isConnect() {
    return from(this.connectSubject);
  }

  disconnect() {
    this._device = null;
    this.connectSubject.next(false);
    this.surveyService.stop();
  }

  listBluetooth(): Observable<Bluetooth[]> {
    return from(this.bluetoothSerial.list());
  }

  private _device: Device;
  public get device(): Device {
    return this._device;
  }
  public set device(value: Device) {
    this._device = value;
    this.connectSubject.next(true);
  }
}