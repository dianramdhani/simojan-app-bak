import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SurveyService } from '@data/services/survey.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Survey } from '@data/schema/survey';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit {
  formCreateSurvey: FormGroup;

  constructor(
    public modalController: ModalController,
    private surveyService: SurveyService,
    private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.formCreateSurvey = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  startSuvey() {
    this.bluetoothSerial.write('START')
      .then(() => {
        const { name } = this.formCreateSurvey.value,
          surveyRunning: Survey = {
            name,
            acc: null,
            gps: null,
            ts: null
          };
        this.surveyService.surveyRunning = surveyRunning;
        this.modalController.dismiss();
      })
      .catch(async err => {
        console.log(err);

        const toast = await this.toastController.create({
          message: 'Start failed. Please click again start button!',
          duration: 2000
        });
        toast.present();
      });
  }
}