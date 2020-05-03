import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-device-setup',
  templateUrl: './device-setup.component.html',
  styleUrls: ['./device-setup.component.scss'],
})
export class DeviceSetupComponent implements OnInit {
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() { }
}