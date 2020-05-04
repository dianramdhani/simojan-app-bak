import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { DeviceSetupComponent } from '../../pages/device-setup/device-setup.component';
import { DeviceService } from 'src/app/data/services/device.service';
import { Device } from '@data/schema/device';

@Component({
  selector: 'app-widget-device',
  templateUrl: './widget-device.component.html',
  styleUrls: ['./widget-device.component.scss'],
})
export class WidgetDeviceComponent implements OnInit {
  deviceConnected = false;
  device: Device;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    this.deviceService.isConnect()
      .subscribe(deviceConnected => {
        this.device = this.deviceService.device;
        this.deviceConnected = deviceConnected;
      });
  }

  async setupDevice() {
    const modal = await this.modalController.create({
      component: DeviceSetupComponent
    });
    await modal.present();
  }

  async disconnect() {
    const alert = await this.alertController.create({
      header: 'Disconnect device?',
      message: 'Are you sure you want to disconnect this device? Your data survey will be stopped.',
      buttons: [
        {
          text: 'No',
          role: 'no'
        }, {
          text: 'Yes',
          handler: () => this.deviceService.disconnect()
        }
      ]
    });
    await alert.present();
  }
}