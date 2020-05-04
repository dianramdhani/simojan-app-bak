import { Injectable } from '@angular/core';

import { Survey } from '@data/schema/survey';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private surveyRun = new BehaviorSubject(false);

  constructor() { }

  isRun() {
    return from(this.surveyRun);
  }

  stop(){
    this.surveyRun.next(false);
    this._surveyRunning = null;
  }

  private _surveyRunning: Survey;
  public get surveyRunning(): Survey {
    return this._surveyRunning;
  }
  public set surveyRunning(value: Survey) {
    this._surveyRunning = value;
    this.surveyRun.next(true);
  }
}
