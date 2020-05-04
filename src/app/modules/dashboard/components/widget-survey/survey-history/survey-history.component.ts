import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-survey-history',
  templateUrl: './survey-history.component.html',
  styleUrls: ['./survey-history.component.scss'],
})
export class SurveyHistoryComponent implements OnInit {
  @Output() switchSurvey = new EventEmitter<'running'>();

  constructor() { }

  ngOnInit() { }

  create() {
    console.log('tes');
    this.switchSurvey.emit('running');
  }
}