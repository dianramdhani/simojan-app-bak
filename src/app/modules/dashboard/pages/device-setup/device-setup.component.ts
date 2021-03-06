import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeviceService } from '@data/services/device.service';
import { Observable } from 'rxjs';
import { Bluetooth } from '@data/schema/bluetooth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Device } from '@data/schema/device';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-device-setup',
  templateUrl: './device-setup.component.html',
  styleUrls: ['./device-setup.component.scss'],
})
export class DeviceSetupComponent implements OnInit {
  listBluetoothObs: Observable<Bluetooth[]>
  formDeviceSetup: FormGroup;

  constructor(
    public modalController: ModalController,
    private deviceService: DeviceService,
    private bluetoothSerial: BluetoothSerial
  ) { }

  async ngOnInit() {
    this.listBluetoothObs = this.deviceService.listBluetooth();

    this.formDeviceSetup = new FormGroup({
      bluetooth: new FormControl(null, Validators.required),
      deviceName: new FormControl(null, Validators.required)
    });

    await this.bluetoothSerial.disconnect();
  }

  connect() {
    const { bluetooth, deviceName } = this.formDeviceSetup.value,
      onConnnect = async () => {
        const device: Device = {
          address: bluetooth.address,
          name: bluetooth.name,
          deviceName,
          internetStatus: null
        };
        this.deviceService.device = device;
        this.modalController.dismiss();
      }

    this.bluetoothSerial.connect(bluetooth.address)
      .subscribe(onConnnect);
  }
}