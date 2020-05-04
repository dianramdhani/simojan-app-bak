import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-survey-running',
  templateUrl: './survey-running.component.html',
  styleUrls: ['./survey-running.component.scss'],
})
export class SurveyRunningComponent implements OnInit {
  @Output() switchSurvey = new EventEmitter<'history'>();
  eventRunning = false;
  mapOnline = false;

  constructor() { }

  ngOnInit() { }

  stopSurvey() {
    console.log('survey stopped');
    this.switchSurvey.emit('history');
  }
}