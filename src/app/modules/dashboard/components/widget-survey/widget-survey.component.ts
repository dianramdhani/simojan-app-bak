import { Component, OnInit } from '@angular/core';

import { DeviceService } from '@data/services/device.service';

@Component({
  selector: 'app-widget-survey',
  templateUrl: './widget-survey.component.html',
  styleUrls: ['./widget-survey.component.scss'],
})
export class WidgetSurveyComponent implements OnInit {
  switchHistoryRunning = true;

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    this.deviceService.isConnect()
      .subscribe(deviceConnected => {
        if (!deviceConnected) {
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