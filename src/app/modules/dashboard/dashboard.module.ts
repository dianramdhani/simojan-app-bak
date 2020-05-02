import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { WidgetDeviceComponent } from './components/widget-device/widget-device.component';
import { WidgetSurveyComponent } from './components/widget-survey/widget-survey.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    WidgetDeviceComponent,
    WidgetSurveyComponent
  ]
})
export class DashboardPageModule { }
