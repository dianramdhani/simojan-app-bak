import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Survey } from '@data/schema/survey';
import { SurveyService } from '@data/services/survey.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-survey-running',
  templateUrl: './survey-running.component.html',
  styleUrls: ['./survey-running.component.scss'],
})
export class SurveyRunningComponent implements OnInit {
  @Output() switchSurvey = new EventEmitter<'history'>();
  eventRunning = false;
  mapOnline = false;
  surveyRunning: Survey;

  constructor(
    private surveyService: SurveyService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.surveyRunning = this.surveyService.surveyRunning;
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
            this.surveyService.stop();
            this.switchSurvey.emit('history');
          }
        }
      ]
    });
    await alert.present();
  }
}