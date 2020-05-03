import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-running',
  templateUrl: './survey-running.component.html',
  styleUrls: ['./survey-running.component.scss'],
})
export class SurveyRunningComponent implements OnInit {
  eventRunning = false;
  mapOnline = false;

  constructor() { }

  ngOnInit() { }
}