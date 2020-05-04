import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Survey } from '@data/schema/survey';
import { SurveyService } from '@data/services/survey.service';
import { AlertController, ToastController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-survey-running',
  templateUrl: './survey-running.component.html',
  styleUrls: ['./survey-running.component.scss'],
})
export class SurveyRunningComponent implements OnInit, OnDestroy {
  @Output() switchSurvey = new EventEmitter<'history'>();
  eventRunning = false;
  mapOnline = false;
  surveyRunning: Survey;
  surveyRunningSub: Subscription;

  constructor(
    private surveyService: SurveyService,
    private alertController: AlertController,
    private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.surveyRunningSub = this.surveyService.surveyRunning
      .subscribe(surveyRunning => this.surveyRunning = surveyRunning);
  }

  ngOnDestroy() {
    this.surveyRunningSub.unsubscribe();
  }

  async stopSurvey() {
    const alert = await this.alertController.create({
      header: 'Survey stop?',
      message: 'Are you sure you want to stop this survey?',
      buttons: [
        {
          text: 'No',
          role: 'no'
        }, {
          text: 'Yes',
          handler: () => {
            this.bluetoothSerial.write('STOP')
              .then(() => {
                this.surveyService.stop();
                this.switchSurvey.emit('history');
              })
              .catch(async err => {
                console.log(err);

                const toast = await this.toastController.create({
                  message: 'Stop failed. Please click again stop button!',
                  duration: 2000
                });
                toast.present();
              });
          }
        }
      ]
    });
    await alert.present();
  }
}