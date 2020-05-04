import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SurveyService } from '@data/services/survey.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Survey } from '@data/schema/survey';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit {
  formCreateSurvey: FormGroup;

  constructor(
    public modalController: ModalController,
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.formCreateSurvey = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  startSuvey() {
    const { name } = this.formCreateSurvey.value,
      surveyRunning: Survey = {
        name,
        acc: null,
        gps: null,
        ts: null
      };
    this.surveyService.surveyRunning = surveyRunning;
    this.modalController.dismiss();
  }
}