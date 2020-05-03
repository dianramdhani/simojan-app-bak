import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-survey',
  templateUrl: './widget-survey.component.html',
  styleUrls: ['./widget-survey.component.scss'],
})
export class WidgetSurveyComponent implements OnInit {
  eventRunning = false;
  mapOnline = false;

  constructor() { }

  ngOnInit() { }
}