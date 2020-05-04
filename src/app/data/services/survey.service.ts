import { Injectable } from '@angular/core';

import { Survey } from '@data/schema/survey';
import { BehaviorSubject, from, Observable, Subscription } from 'rxjs';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { DataDevice } from '@data/schema/data-device';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private surveyRun = new BehaviorSubject(false);
  private dataDeviceSubs: Subscription;
  public surveyRunning = new BehaviorSubject<Survey>(null);

  constructor(
    private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController
  ) { }

  isRun() {
    return from(this.surveyRun);
  }

  start(name: string) {
    const dataDeviceObs = this.bluetoothSerial.subscribe('\n')
      .pipe(
        map((data: string): DataDevice => {
          const toastData = async () => {
            const toast = await this.toastController.create({
              message: `Data diterima. Tolong kirim sesuai format json. | ${data}`,
              duration: 3000
            });
            toast.present();
          }

          toastData();
          const dataParse = JSON.parse(data);
          return dataParse;
        })
      );
    this.dataDeviceSubs = dataDeviceObs
      .subscribe(({ acc, gps, ts }) => {
        this.surveyRunning.next({ name, acc, gps, ts });
      });

    this.surveyRun.next(true);
  }

  stop() {
    this.surveyRun.next(false);
    this.surveyRunning.next(null);
    this.dataDeviceSubs.unsubscribe();
  }
}
