import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeviceSetupComponent } from '../../pages/device-setup/device-setup.component';

@Component({
  selector: 'app-widget-device',
  templateUrl: './widget-device.component.html',
  styleUrls: ['./widget-device.component.scss'],
})
export class WidgetDeviceComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  async setupDevice() {
    const modal = await this.modalController.create({
      component: DeviceSetupComponent
    });
    return await modal.present();
  }
}