import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-survey',
  templateUrl: './widget-survey.component.html',
  styleUrls: ['./widget-survey.component.scss'],
})
export class WidgetSurveyComponent implements OnInit {
  switchHistoryRunning = true;

  constructor() { }

  ngOnInit() { }

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