import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { WidgetDeviceComponent } from './components/widget-device/widget-device.component';
import { WidgetSurveyComponent } from './components/widget-survey/widget-survey.component';
import { DeviceSetupComponent } from './pages/device-setup/device-setup.component';
import { SurveyRunningComponent } from './components/widget-survey/survey-running/survey-running.component';
import { SurveyHistoryComponent } from './components/widget-survey/survey-history/survey-history.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardPage,
    WidgetDeviceComponent,
    WidgetSurveyComponent,
    DeviceSetupComponent,
    SurveyRunningComponent,
    SurveyHistoryComponent,
    CreateSurveyComponent
  ],
  entryComponents: [
    DeviceSetupComponent,
    CreateSurveyComponent
  ]
})
export class DashboardPageModule { }
