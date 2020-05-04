import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateSurveyComponent } from '../../../pages/create-survey/create-survey.component';

@Component({
  selector: 'app-survey-history',
  templateUrl: './survey-history.component.html',
  styleUrls: ['./survey-history.component.scss'],
})
export class SurveyHistoryComponent implements OnInit {
  @Output() switchSurvey = new EventEmitter<'running'>();

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  async create() {
    // this.switchSurvey.emit('running');
    const modal = await this.modalController.create({
      component: CreateSurveyComponent
    });
    await modal.present();
  }
}