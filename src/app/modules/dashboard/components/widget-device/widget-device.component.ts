import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DeviceSetupComponent } from '../../pages/device-setup/device-setup.component';

@Component({
  selector: 'app-widget-device',
  templateUrl: './widget-device.component.html',
  styleUrls: ['./widget-device.component.scss'],
})
export class WidgetDeviceComponent implements OnInit {
  deviceConnected = false;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async setupDevice() {
    const modal = await this.modalController.create({
      component: DeviceSetupComponent
    });
    await modal.present();
    this.deviceConnected = true;
  }

  async disconnect() {
    const alert = await this.alertController.create({
      header: 'Disconnect device?',
      message: 'Are you sure you want to disconnect this device? Your data survey will be stopped.',
      buttons: [
        {
          text: 'No',
          role: 'no',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.deviceConnected = false;
          }
        }
      ]
    });
    await alert.present();
  }
}