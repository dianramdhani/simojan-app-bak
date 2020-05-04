import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { DeviceService } from '@data/services/device.service';
import { SurveyService } from '@data/services/survey.service';

@Component({
  selector: 'app-widget-survey',
  templateUrl: './widget-survey.component.html',
  styleUrls: ['./widget-survey.component.scss'],
})
export class WidgetSurveyComponent implements OnInit {
  switchHistoryRunning = true;

  constructor(
    private deviceService: DeviceService,
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    const checkSurveyRunning = this.deviceService.isConnect()
      .pipe(
        switchMap(deviceConnected => {
          if (!deviceConnected) {
            this.switchSurvey('history');
          }

          return this.surveyService.isRun();
        })
      );

    checkSurveyRunning
      .subscribe(surveyRunning => {
        if (surveyRunning) {
          this.switchSurvey('running');
        } else {
          this.switchSurvey('history');
        }
      });
  }

  switchSurvey(event: 'history' | 'running') {
    switch (event) {
      case 'history':
        this.switchHistoryRunning = true;
        break;
      case 'running':
        this.switchHistoryRunning = false;
        break;
    }
  }
}